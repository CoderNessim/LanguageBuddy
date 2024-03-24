import { useState, useEffect } from 'react';
/**
 * 
 * @param {*} flashCards: array of flashcards
 * @param {*} currentFlashcardIndex: flashcard that is presented in carousel 
 * @param {*} setCurrentFlashcardIndex:sets the flashcard to be presented in carousel
 * @summary This hook is used to handle the carousel of flashcards, mainly scrolling and clicking arrow keys 
 */
export function useEmbla(flashCards, currentFlashcardIndex, setCurrentFlashcardIndex) {
  const [embla, setEmbla] = useState(null);

  function handleNext() {
    if (currentFlashcardIndex === flashCards.length - 1) return;
    embla?.scrollNext();
  }

  function handlePrev() {
    if (currentFlashcardIndex === 0) return;
    embla?.scrollPrev();
  }

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => {
      const selectedIndex = embla.selectedScrollSnap();
      setCurrentFlashcardIndex(selectedIndex);
    };

    embla.on('select', onSelect);
    return () => embla.off('select', onSelect);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [embla]);
  
  return {
    setEmbla,
    handleNext,
    handlePrev
  };
}
