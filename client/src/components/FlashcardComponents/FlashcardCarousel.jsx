import { Carousel } from '@mantine/carousel';
import FlashcardFooter from './FlashcardFooter';
import { useEmbla } from '../../hooks/useEmbla';
import CustomFlashcard from './CustomFlashcard';
import { useFlashcards } from '../../contexts/FlashcardContext';

/**
 * @returns a component containing all components needed for the flashcard carousel
 */
export default function FlashcardCarousel({
  flashCards,
  setFlashCards,
  handleDelete,
}) {

  const { flashcards, currentFlashcardIndex, setCurrentFlashcardIndex } = useFlashcards();

  const { setEmbla, handleNext, handlePrev } = useEmbla(
    flashcards,
    currentFlashcardIndex,
    setCurrentFlashcardIndex
  );


  return flashcards.length > 0 ? (
    <>
      <div className="flashcard-container">
        <Carousel
          slideSize="xs"
          slideGap="lg"
          withControls={false}
          getEmblaApi={setEmbla}
          withKeyboardEvents={false}
        >
          {flashcards.map((card, i) => {
            return (
              <Carousel.Slide key={i}>
                <CustomFlashcard
                  handleDelete={() => handleDelete(flashCards[i].id)}
                  card={card}
                  flashCards={flashCards}
                  setFlashCards={setFlashCards}
                  index={i}
                />
              </Carousel.Slide>
            );
          })}
        </Carousel>
      </div>
      <FlashcardFooter
        flashCards={flashCards}
        currentFlashcardIndex={currentFlashcardIndex}
        handleNext={handleNext}
        handlePrev={handlePrev}
      />
    </>
  ) : (
    <h1 className="no-flashcards-message">Flashcards will appear here:</h1>
  );
}
