import { Container, Grid, SimpleGrid, Space } from '@mantine/core';
import TopGrid from './TopGrid';
import { useState } from 'react';
import { useFetchTranslation } from '../../hooks/useFetchTranslation';
import LeadGrid from './LeadGridComponents/LeadGrid';
import GridHeader from './GridHeader';
import useFetchSentence from '../../hooks/useFetchSentence';
import { Progress } from '@mantine/core';
import useSimilarityScore from '../../hooks/useSimilarityScore';
import BottomGridGroup from './BottomGridGroup';

/**
 * @returns component holding all components needed for the custom grid
 */
export default function CustomGrid({ flashCards, setFlashCards }) {
  const [text, setText] = useState('');
  const [isTranslationSubmitted, setIsTranslationSubmitted] = useState(false);
  const [numWords, setNumWords] = useState(0);
  const [typingIn, setTypingIn] = useState('ES');
  const [generatingIn, setGeneratingIn] = useState('EN');
  const [languageFullName, setLanguageFullName] = useState('English');
  const [messages, setMessages] = useState([]);
  const [generatingSubmitState, setGeneratingSubmitState] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);

  const {
    sentence,
    setSentence,
    isLoading: isSentenceLoading,
    error: sentenceError,
    isMounted,
  } = useFetchSentence(generatingSubmitState, messages, setMessages);

  const {
    error: translationError,
    isLoading: isTranslationLoading,
    translatedText,
  } = useFetchTranslation(
    sentence,
    typingIn,
    generatingIn,
    isTranslationSubmitted
  );

  const { score, setScore } = useSimilarityScore(
    translatedText,
    text,
    sentence,
    isTranslationLoading,
    isTranslationSubmitted
  );

  return (
    <>
      <GridHeader
        typingIn={typingIn}
        setTypingIn={setTypingIn}
        generatingIn={generatingIn}
        setGeneratingIn={setGeneratingIn}
        setLanguageFullName={setLanguageFullName}
        setShowTranslation={setShowTranslation}
        setSentence={setSentence}
        setIsTranslationSubmitted={setIsTranslationSubmitted}
        setText={setText}
        setScore={setScore}
      />
      <Container my="md" size="80%">
        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
          <LeadGrid
            sentence={sentence}
            numWords={numWords}
            setNumWords={setNumWords}
            setGeneratingSubmitState={setGeneratingSubmitState}
            isMounted={isMounted}
            isSentenceLoading={isSentenceLoading}
            sentenceError={sentenceError}
            languageFullName={languageFullName}
            setMessages={setMessages}
            showTranslation={showTranslation}
            setShowTranslation={setShowTranslation}
            translatedText={translatedText}
            isTranslationLoading={isTranslationLoading}
          />
          <Grid gutter="md">
            <TopGrid
              text={text}
              setText={setText}
              translationError={translationError}
              isTranslationLoading={isTranslationLoading}
              isSentenceLoading={isSentenceLoading}
            />
            <Space h="145px" />
            <BottomGridGroup
              score={score}
              text={text}
              setIsTranslationSubmitted={setIsTranslationSubmitted}
              showTranslation={showTranslation}
              setShowTranslation={setShowTranslation}
              sentence={sentence}
              translatedText={translatedText}
              flashCards={flashCards}
              setFlashCards={setFlashCards}
            />
          </Grid>
        </SimpleGrid>
      </Container>
      <Container my="md" size="80%">
        <Progress
          value={translatedText && score}
          transitionDuration={400}
          radius="md"
        />
      </Container>
      <Space h="100px" />
    </>
  );
}
