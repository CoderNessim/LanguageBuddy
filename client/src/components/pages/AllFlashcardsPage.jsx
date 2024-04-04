import { useEffect } from 'react';
import FlashcardPaper from '../FlashcardComponents/FlashcardPaper';
import ViewAllHeader from '../FlashcardComponents/ViewAllHeader';

function AllFlashcardsPage({
  flashCards,
  setFlashCards,
  handleDelete,
  setCurrentFlashcardIndex,
}) {

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
        {flashCards.map((card, index) => (
          <FlashcardPaper
            flashCards={flashCards}
            index={index}
            card={card}
            handleDelete={handleDelete}
            setFlashCards={setFlashCards}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default AllFlashcardsPage;
