import Button from '../Button';
import FlashcardNavigation from './FlashcardNavigation';
import { Link } from 'react-router-dom';
/**
 * @returns the bottom part of the flashcard carousel
 * includes navigation tools and a button to view all flashcards
 */
export default function FlashcardFooter({
  flashCards,
  handlePrev,
  handleNext,
  currentFlashcardIndex
}) {

  return (
    <div className="flashcard-footer">
      <div className="flashcard-footer-wrapper">
        <FlashcardNavigation
          flashCards={flashCards}
          currentFlashcardIndex={currentFlashcardIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
        <div style={{ marginTop: '20px' }}>
          <Link to="/allflashcards">
            <Button text="View All" />
          </Link>
        </div>
      </div>
    </div>
  );
}
