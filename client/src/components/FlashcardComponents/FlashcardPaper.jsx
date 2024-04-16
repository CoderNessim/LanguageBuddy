import { Paper, Divider } from '@mantine/core';
import FlashcardTools from './FlashcardTools';
import { useFlashcards } from '../../contexts/FlashcardContext';

/**
 * @returns a paper component from mantine
 * this paper component holds the front and back of the flashcard when viewing all flashcards
 */
export default function FlashcardPaper({
  index,
  card,
}) {
  const { flashcards, handleDelete } = useFlashcards();

  return (
    <Paper
      shadow="xs"
      radius="xs"
      p="xl"
      withBorder
      className="paper-flashcard"
    >
      <div
        className={`paper-flashcard-tools ${
          flashcards[index].frontHTML.length > 15 ? 'medium' : 'small'
        }`}
      >
        <FlashcardTools
          handleDelete={() => handleDelete(flashcards[index].id)}
          text={card.frontHTML}
          translatedText={card.backHTML}          index={index}
          className=""
        />
      </div>

      <div className="paper-flashcard-front">{card.frontHTML}</div>
      <Divider style={{ margin: '10px 0' }} />
      <div className="paper-flashcard-back">{card.backHTML}</div>
    </Paper>
  );
}
