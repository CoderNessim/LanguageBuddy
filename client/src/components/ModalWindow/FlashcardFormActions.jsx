import { Group, Notification } from '@mantine/core';
import Button from '../Button';
import { useState } from 'react';
/**
 * @summary This component holds the buttons for the flashcard form
 * these buttons have specific actions that are handled by props
 */
export default function FlashcardFormActions({
  setFlashCardText,
  setFlashCardTranslation,
  flashCardText,
  flashCardTranslation,
  closeModal,
  buttonText,
  handleSubmit
}) {
  const [modalError, setModalError] = useState('');

  // Clear the flashcard text and translation
  function onClear() {
    setFlashCardText('');
    setFlashCardTranslation('');
    setModalError(''); // Clear any existing modal errors
  }

  function onSubmit(modalFlashcardText, modalFlashcardTranslation) {
    if (!flashCardText || !flashCardTranslation) {
      setModalError('Both sides of the flashcard are required.');
      return;
    }
    handleSubmit(modalFlashcardText, modalFlashcardTranslation);
    onClear();
    closeModal();
  }
  
  return (
    <>
      {modalError && (
        <Notification
          color="red"
          onClose={() => setModalError('')} 
          style={{ marginTop: '20px' }} 
        >
          {modalError}
        </Notification>
      )}
      <Group style={{ marginTop: '20px' }}>
        <Button text="Clear" onClick={onClear} />
        <Button text={buttonText} onClick={() => onSubmit(flashCardText, flashCardTranslation)} />
      </Group>
    </>
  );
}
