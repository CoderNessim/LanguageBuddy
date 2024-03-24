import { CloseButton } from '@mantine/core';
import { IconEdit } from '@tabler/icons-react';
import ModalWindow from '../ModalWindow/ModalWindow';

/**
 * @returns the edit and delete buttons for the flashcard
 */
export default function FlashcardTools({
  handleDelete,
  text,
  translatedText,
  setFlashCards,
  index,
  className
}) {

  function onEdit(modalFlashCardText, modalFlashCardTranslation) {
    setFlashCards((prev) => {
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
        setFlashCards={setFlashCards}
        handleSubmit={onEdit}
      />
      <CloseButton size="xl" onClick={handleDelete} />
    </div>
  );
}
