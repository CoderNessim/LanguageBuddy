import { useEffect } from 'react';
import FlashcardPaper from '../FlashcardComponents/FlashcardPaper';
import ViewAllHeader from '../FlashcardComponents/ViewAllHeader';
import { useFlashcards } from '../../contexts/FlashcardContext';

function AllFlashcardsPage() {
  const { flashcards, setCurrentFlashcardIndex } = useFlashcards();

  useEffect(() => {
    document.body.classList.add('all-flashcards-background');
    setCurrentFlashcardIndex(0);

    return () => {
      document.body.classList.remove('all-flashcards-background');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <ViewAllHeader />
      <div className="flashcards-content">
        {flashcards.map((card, index) => (
          <FlashcardPaper
            index={index}
            card={card}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default AllFlashcardsPage;
