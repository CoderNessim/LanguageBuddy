import { PRIMARY_COL_HEIGHT } from '../../../config/config';
import { Slider } from '@mantine/core';
import {
  openaiSentenceMessageRequest,
  openaiWordsMessageRequest,
} from '../../../config/config';
import TextDisplay from './TextDisplay';
import ButtonGroup from './ButtonGroup';
import LeadGridHeader from './LeadGridHeader';

export default function LeadGrid({
  sentence,
  numWords,
  setNumWords,
  setGeneratingSubmitState,
  isMounted,
  isSentenceLoading,
  sentenceError,
  languageFullName,
  setMessages,
  showTranslation,
  setShowTranslation,
  translatedText,
  isTranslationLoading,
}) {
  
  function onSentence() {
    //api will not fetch on initial mount
    setShowTranslation(false);
    isMounted.current = true;
    setMessages((prevMessages) => [
      ...prevMessages,
      openaiSentenceMessageRequest(languageFullName),
    ]);
    setGeneratingSubmitState((prev) => !prev);
  }

  function onRandomWords(numWords, languageFullName) {
    if (numWords === 0) return;
    setShowTranslation(false);
    isMounted.current = true;
    setMessages((prevMessages) => [
      ...prevMessages,
      openaiWordsMessageRequest(languageFullName, numWords),
    ]);
    setGeneratingSubmitState((prevSubmitState) => !prevSubmitState);
  }

  return (
    <div
      className="generate-phrase-grid"
      style={{ height: PRIMARY_COL_HEIGHT }}
    >
      <LeadGridHeader />
      <ButtonGroup
        numWords={numWords}
        languageFullName={languageFullName}
        onRandomWords={onRandomWords}
        onSentence={onSentence}
      />
      <Slider
        min={0}
        max={10}
        mt="sm"
        style={{ width: '50%' }}
        value={numWords}
        onChange={setNumWords}
      />
      <TextDisplay
        isSentenceLoading={isSentenceLoading}
        isTranslationLoading={isTranslationLoading}
        sentenceError={sentenceError}
        showTranslation={showTranslation}
        translatedText={translatedText}
        sentence={sentence}
      />
    </div>
  );
}
