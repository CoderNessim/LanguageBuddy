import { useState } from 'react';
import Title from '../Title';
import TranslatedFrom from './TranslatedFrom';
import Button from '../Button';
import TranslatedTo from './TranslatedTo';
import TranslateContainer from './TranslateContainer';
import { useFetchTranslation } from '../../hooks/useFetchTranslation';

/**
 * This component holds all the translation components
 * state for translator components is initialized here and passed down to children components
 * @returns {JSX.Element}: entire translator component
 */
export default function Translator() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [text, setText] = useState('');
  const [languageFrom, setLanguageFrom] = useState('EN');
  const [languageTo, setLanguageTo] = useState('ES');
  const { error, isLoading, translatedText } = useFetchTranslation(
    text,
    languageTo,
    languageFrom,
    isSubmitted
  );
  return (
    <section id="contact">
      <Title />
      <TranslateContainer setIsSubmitted={setIsSubmitted}>
        <TranslatedFrom
          text={text}
          setText={setText}
          languageFrom={languageFrom}
          setLanguageFrom={setLanguageFrom}
        ></TranslatedFrom>
        <TranslatedTo
          languageTo={languageTo}
          setLanguageTo={setLanguageTo}
          translatedText={translatedText}
          isLoading={isLoading}
          error={error}
        >
          <Button
            text={
              <>
                <i className="fa fa-globe" aria-hidden="true"></i> translate
              </>
            }
          />
        </TranslatedTo>
      </TranslateContainer>
    </section>
  );
}
