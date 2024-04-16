import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';
import { useFlashcards } from '../../contexts/FlashcardContext';

/**
 * @returns arrow keys and flashcard number for navigation
 */
export default function FlashcardNavigation({
  handlePrev,
  handleNext,
}) {

  const { flashcards, currentFlashcardIndex } = useFlashcards();

  return (
    <div className="flashcard-navigation">
      <IconArrowLeft
        style={{ cursor: 'pointer', color: 'white' }}
        onClick={handlePrev}
      />
      <span style={{ fontSize: '13.5px', color: 'white' }}>
        {currentFlashcardIndex + 1}/{flashcards.length}
      </span>
      <IconArrowRight
        style={{ cursor: 'pointer', color: 'white' }}
        onClick={handleNext}
      />
    </div>
  );
}
