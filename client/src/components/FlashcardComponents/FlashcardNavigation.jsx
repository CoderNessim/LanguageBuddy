import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react';

/**
 * @returns arrow keys and flashcard number for navigation
 */
export default function FlashcardNavigation({
  handlePrev,
  currentFlashcardIndex,
  flashCards,
  handleNext,
}) {
  return (
    <div className="flashcard-navigation">
      <IconArrowLeft
        style={{ cursor: 'pointer', color: 'white' }}
        onClick={handlePrev}
      />
      <span style={{ fontSize: '13.5px', color: 'white' }}>
        {currentFlashcardIndex + 1}/{flashCards.length}
      </span>
      <IconArrowRight
        style={{ cursor: 'pointer', color: 'white' }}
        onClick={handleNext}
      />
    </div>
  );
}
