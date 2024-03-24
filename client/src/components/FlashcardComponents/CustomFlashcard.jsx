import FlashcardTools from './FlashcardTools';
import { Flashcard } from 'react-quizlet-flashcard';
import { flashcardStyle } from '../../config/config';

export default function CustomFlashcard({
  handleDelete,
  flashCards,
  setFlashCards,
  index,
  card,
}) {
  return (
    <>
      <FlashcardTools
        handleDelete={() => handleDelete(flashCards[index].id)}
        text={card.frontHTML}
        translatedText={card.backHTML}
        setFlashCards={setFlashCards}
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
