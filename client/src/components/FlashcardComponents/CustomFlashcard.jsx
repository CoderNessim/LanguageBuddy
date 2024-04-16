import FlashcardTools from './FlashcardTools';
import { Flashcard } from 'react-quizlet-flashcard';
import { flashcardStyle } from '../../config/config';

export default function CustomFlashcard({
  index,
  card,
}) {
  return (
    <>
      <FlashcardTools
        text={card.frontHTML}
        translatedText={card.backHTML}
        index={index}
        className="flashcard-tools"
      />
      <Flashcard
        key={card.id}
        frontHTML={card.frontHTML}
        backHTML={card.backHTML}
        frontContentStyle={flashcardStyle}
        backContentStyle={flashcardStyle}
        className="flashcard"
      />
    </>
  );
}
