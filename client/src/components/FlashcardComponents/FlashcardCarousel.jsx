import { Carousel } from '@mantine/carousel';
import FlashcardFooter from './FlashcardFooter';
import { useEmbla } from '../../hooks/useEmbla';
import CustomFlashcard from './CustomFlashcard';

/**
 * @returns a component containing all components needed for the flashcard carousel
 */
export default function FlashcardCarousel({
  flashCards,
  setFlashCards,
  currentFlashcardIndex,
  setCurrentFlashcardIndex,
  handleDelete,
}) {
  const { setEmbla, handleNext, handlePrev } = useEmbla(
    flashCards,
    currentFlashcardIndex,
    setCurrentFlashcardIndex
  );

  return flashCards.length > 0 ? (
    <>
      <div className="flashcard-container">
        <Carousel
          slideSize="xs"
          slideGap="lg"
          withControls={false}
          getEmblaApi={setEmbla}
          withKeyboardEvents={false}
        >
          {flashCards.map((card, i) => {
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
