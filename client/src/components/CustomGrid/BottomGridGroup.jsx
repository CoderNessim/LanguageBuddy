import BottomGrid from './BottomGrid';
import SimilarityScore from './SimilarityScore';
import ModalWindow from '../ModalWindow/ModalWindow';
import Button from '../Button';

/**
 * @summary This component is a group of two BottomGrid components
 * it holds the actions for making flashcards, showing translation, and checking similarity
 */
export default function BottomGridGroup({
  score,
  text,
  setIsTranslationSubmitted,
  showTranslation,
  setShowTranslation,
  sentence,
  translatedText,
  flashCards,
  setFlashCards
}) {
  
  function onCreate(modalFlashcardText, modalFlashcardTranslation) {
    setFlashCards((prev) => [
      ...prev,
      {
        id: Date.now(),
        frontHTML: modalFlashcardText,
        backHTML: modalFlashcardTranslation,
      },
    ]);
  }

  return (
    <>
      <BottomGrid
        content={
          <SimilarityScore
            score={score}
            text={text}
            setIsTranslationSubmitted={setIsTranslationSubmitted}
          />
        }
      />
      <BottomGrid
        content={
          <>
            <Button
              text={showTranslation ? 'Hide Translation' : 'Show Translation'}
              onClick={() => {
                setIsTranslationSubmitted((prev) => !prev);
                setShowTranslation((prev) => !prev);
              }}
            />
            <ModalWindow
              text={sentence}
              translatedText={translatedText}
              setIsTranslationSubmitted={setIsTranslationSubmitted}
              flashCards={flashCards}
              title="Flashcard Maker"
              buttonText="Create"
              openModalButton={<Button text="Make a flashcard"></Button>}
              handleSubmit={onCreate}
            />
          </>
        }
      />
    </>
  );
}
