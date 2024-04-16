import { createContext } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useState } from 'react';
import { useContext } from 'react';

const FlashcardContext = createContext();

function FlashcardProvider({ children }) {
  const [flashcards, setFlashcards] = useLocalStorage([], 'flashCards');
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  function handleDelete(cardId) {
    const newFlashCards = flashcards
      .filter((card) => card.id !== cardId)
      .sort((a, b) => a.id - b.id);
    setFlashcards(newFlashCards);

    if (currentFlashcardIndex === flashcards.length - 1) {
      setCurrentFlashcardIndex((prev) => prev - 1);
    }
  }

  return (
    <FlashcardContext.Provider
      value={{
        flashcards,
        setFlashcards,
        currentFlashcardIndex,
        setCurrentFlashcardIndex,
        handleDelete
      }}
    >
      {children}
    </FlashcardContext.Provider>
  );
}

function useFlashcards() {
  const context = useContext(FlashcardContext);
  if (!context) {
    throw new Error('useFlashcards must be used within a FlashcardProvider');
  }
  return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { FlashcardProvider, useFlashcards };
