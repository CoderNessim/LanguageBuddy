import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FlashcardProvider } from './contexts/FlashcardContext';
import NotFound from './components/pages/NotFound';
import AppHomePage from './components/pages/AppHomePage';
import AllFlashcardsPage from './components/pages/AllFlashcardsPage';

function App() {
  return (
    <>
      <FlashcardProvider>
        <BrowserRouter>
          <Routes>
            <Route index element={<AppHomePage />} />
            <Route path="allflashcards" element={<AllFlashcardsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </FlashcardProvider>
    </>
  );
}

export default App;
