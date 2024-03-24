import { useState, useEffect } from 'react';
import { stringSimilarity } from 'string-similarity-js';

/**
 * @param {*} translatedText: translated text 
 * @param {*} text: original text 
 * @param {*} sentence: generated sentence to compare 
 * @param {*} isTranslationLoading: checks if translation is loading 
 * @param {*} isTranslationSubmitted: checks if translation is submitted 
 * @summary This hook is used to calculate the similarity score between the translated text 
 * and the original text using an imported npm package string-similarity-js
 */
export default function useSimilarityScore(
  translatedText,
  text,
  sentence,
  isTranslationLoading,
  isTranslationSubmitted
) {
  const [score, setScore] = useState(-1);

  useEffect(() => {
    // Make sure both the translation is not loading and is submitted to calculate
    if (!isTranslationLoading && translatedText && text) {
      const similarityScore =
        sentence.length <= 10
          ? stringSimilarity(translatedText, text, 1)
          : stringSimilarity(translatedText, text);
      setScore((similarityScore * 100).toFixed(2));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isTranslationLoading, isTranslationSubmitted, translatedText]);

  useEffect(() => {
    setScore(-1);
  }, [sentence]);

  return { score, setScore };
}
