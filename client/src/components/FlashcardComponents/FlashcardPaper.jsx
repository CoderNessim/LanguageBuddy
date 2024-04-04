import { Paper, Divider } from '@mantine/core';
import FlashcardTools from './FlashcardTools';

/**
 * @returns a paper component from mantine
 * this paper component holds the front and back of the flashcard when viewing all flashcards
 */
export default function FlashcardPaper({
  flashCards,
  index,
  card,
  handleDelete,
  setFlashCards,
}) {
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
          flashCards[index].frontHTML.length > 15 ? 'medium' : 'small'
        }`}
      >
        <FlashcardTools
          handleDelete={() => handleDelete(flashCards[index].id)}
          text={card.frontHTML}
          translatedText={card.backHTML}
          setFlashCards={setFlashCards}
          index={index}
          className=""
        />
      </div>

      <div className="paper-flashcard-front">{card.frontHTML}</div>
      <Divider style={{ margin: '10px 0' }} />
      <div className="paper-flashcard-back">{card.backHTML}</div>
    </Paper>
  );
}
