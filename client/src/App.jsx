import { useLocalStorage } from './hooks/useLocalStorage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AppHomePage from './components/pages/AppHomePage';
import AllFlashcardsPage from './components/pages/AllFlashcardsPage';
import { useState } from 'react';

function App() {
  const [flashCards, setFlashCards] = useLocalStorage([], 'flashCards');
  const [currentFlashcardIndex, setCurrentFlashcardIndex] = useState(0);

  function handleDelete(cardId) {
    const newFlashCards = flashCards
      .filter((card) => card.id !== cardId)
      .sort((a, b) => a.id - b.id);
    setFlashCards(newFlashCards);

    if (currentFlashcardIndex === flashCards.length - 1) {
      setCurrentFlashcardIndex((prev) => prev - 1);
    }
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <AppHomePage
                flashCards={flashCards}
                setFlashCards={setFlashCards}
                currentFlashcardIndex={currentFlashcardIndex}
                setCurrentFlashcardIndex={setCurrentFlashcardIndex}
                handleDelete={handleDelete}
              />
            }
          />
          <Route
            path="allflashcards"
            element={
              <AllFlashcardsPage
                flashCards={flashCards}
                setFlashCards={setFlashCards}
                handleDelete={handleDelete}
                setCurrentFlashcardIndex={setCurrentFlashcardIndex}
              />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
