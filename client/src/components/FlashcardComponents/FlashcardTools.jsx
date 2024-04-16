import { CloseButton } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import ModalWindow from '../ModalWindow/ModalWindow';
import { useFlashcards } from '../../contexts/FlashcardContext';

/**
 * @returns the edit and delete buttons for the flashcard
 */
export default function FlashcardTools({
  text,
  translatedText,
  index,
  className,
}) {
  const { handleDelete, setFlashcards, flashcards } = useFlashcards();
  function onEdit(modalFlashCardText, modalFlashCardTranslation) {
    setFlashcards((prev) => {
      const newFlashCards = [...prev];
      newFlashCards[index].frontHTML = modalFlashCardText;
      newFlashCards[index].backHTML = modalFlashCardTranslation;
      return newFlashCards;
    });
  }

  return (
    <div className={className}>
      <ModalWindow
        openModalButton={<IconEdit className="icon-edit" />}
        title="Flashcard Editor"
        buttonText="Edit Flashcard"
        text={text}
        translatedText={translatedText}
        handleSubmit={onEdit}
      />
      <CloseButton size="xl" onClick={() => handleDelete(flashcards[index].id)} />
    </div>
  );
}
