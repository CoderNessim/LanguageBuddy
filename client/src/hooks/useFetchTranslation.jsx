import { useState, useEffect, useRef } from 'react';

/**
 * 
 * @param {*} text: text to be translated 
 * @param {*} targetLang: language to translate to 
 * @param {*} sourceLang: language to translate from 
 * @param {*} isSubmitted: boolean that changes based on user events. This is used
 * in useEffect hook to trigger the fetch request. 
 */
export function useFetchTranslation(text, targetLang, sourceLang, isSubmitted) {
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [translatedText, setTranslatedText] = useState('');
  const prevIsSubmitted = useRef(isSubmitted);
  const prevText = useRef(text);
  const prevSourceLang = useRef(sourceLang);
  const prevTargetLang = useRef(targetLang);

  useEffect(() => {
    //updates refs and resets error
    const updatePrevState = () => {
      prevIsSubmitted.current = isSubmitted;
      setError('');
    };

    async function fetchData() {
      const baseUrl = import.meta.env.VITE_REACT_APP_API_BASE_URL || 'http://localhost:3000';
      if (!text || sourceLang === targetLang) {
        setError(
          sourceLang === targetLang
            ? 'Cannot translate between the same languages! Change either the "from" or "to" language'
            : 'Input or generate text before you translate!'
        );
        return;
      } else if (
        text === prevText.current &&
        sourceLang === prevSourceLang.current &&
        targetLang === prevTargetLang.current
      ) {
        return;
      }

      try {
        setIsLoading(true);
        //fetches from server
        const response = await fetch(
          `${baseUrl}/translate?text=${encodeURIComponent(
            text
          )}&targetLang=${encodeURIComponent(
            targetLang
          )}&sourceLang=${encodeURIComponent(sourceLang)}`
        );

        if (!response.ok)
          throw new Error('Something went wrong with the translation request');

        const data = await response.json();
        setTranslatedText(data.translations[0].text);
        // Update refs after successful fetch and conditions are met.
        prevText.current = text;
        prevSourceLang.current = sourceLang;
        prevTargetLang.current = targetLang;
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    // Condition check for fetching data.
    if (isSubmitted !== prevIsSubmitted.current) {
      fetchData();
    }

    return updatePrevState;
  }, [isSubmitted, sourceLang, targetLang, text]);

  useEffect(() => {
    // Reset error and translatedText when sourceLang or targetLang changes.
    setError('');
  }, [targetLang, sourceLang, translatedText]);

  return { error, isLoading, translatedText };
}
