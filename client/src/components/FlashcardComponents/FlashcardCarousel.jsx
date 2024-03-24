import { Carousel } from '@mantine/carousel';
import FlashcardFooter from './FlashcardFooter';
import { useState } from 'react';
import { useEmbla } from '../../hooks/useEmbla';
import CustomFlashcard from './CustomFlashcard';

/**
 * @returns a component containing all components needed for the flashcard carousel
 */
export default function FlashcardCarousel({ flashCards, setFlashCards }) {
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);
  const { setEmbla, handleNext, handlePrev } = useEmbla(
    flashCards,
    currentFlashcardIndex,
    setCurrentFlashcardIndex
  );

  //filters out flashcard by its id and sorts the flashcards by id
  function handleDelete(cardId) {
    const newFlashCards = flashCards
      .filter((card) => card.id !== cardId)
      .sort((a, b) => a.id - b.id);
    setFlashCards(newFlashCards);

    if (currentFlashcardIndex === flashCards.length - 1) {
      setCurrentFlashcardIndex((prev) => prev - 1);
    }
  }

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
        handleDelete={handleDelete}
        setFlashCards={setFlashCards}
      />
    </>
  ) : (
    <h1 className="no-flashcards-message">Flashcards will appear here:</h1>
  );
}
