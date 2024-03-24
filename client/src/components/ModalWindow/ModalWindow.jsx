import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput } from '@mantine/core';
import { useState, useEffect } from 'react';
import FlashcardFormActions from './FlashcardFormActions';
import ModalHeader from './ModalHeader';
import React from 'react';

const customTextInputStyle = {
  input: { fontSize: '13px' },
  label: { fontSize: '13px', marginBottom: '10px', marginTop: '10px' },
};

/**
 * @summary This component is a modal window that allows the user
 * to input a sentence and its translation, can also handle input such as creation of flashcards
 */
export default function ModalWindow({
  text,
  translatedText,
  setIsTranslationSubmitted,
  title,
  buttonText,
  openModalButton,
  handleSubmit,
}) {
  const [opened, { open, close }] = useDisclosure(false);
  const [flashCardText, setFlashCardText] = useState(text);
  const [flashCardTranslation, setFlashCardTranslation] = useState(translatedText);

  //opens modal and calls useFetchTranslation to get translation
  function onOpen() {
    open();
    setIsTranslationSubmitted?.((prev) => !prev);
  }

  //updates the text and translation when the text or translation changes in input boxes
  //accounts for the case where a sentence is generated but not translated
  useEffect(() => {
    setFlashCardText(text);
    setFlashCardTranslation(translatedText);
    if (text && !translatedText) setIsTranslationSubmitted?.((prev) => !prev);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, translatedText]);

  //creates a button that opens the modal
  const TriggerButton = openModalButton
    ? React.cloneElement(openModalButton, { onClick: onOpen })
    : null;

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        size="xl"
        overlayopacity={0.55}
        overlayblur={3}
        title={<ModalHeader title={title} />}
        closeButtonProps={{ size: 'xl' }}
      >
        <div
          style={{
            paddingLeft: '20px',
            paddingBottom: '30px',
            paddingRight: '20px',
          }}
        >
          <TextInput
            label="Sentence or word:"
            placeholder="Enter here"
            margin="md"
            styles={customTextInputStyle}
            value={flashCardText}
            onChange={(e) => setFlashCardText(e.currentTarget.value)}
          />
          <TextInput
            label="Translation:"
            placeholder="Enter translation"
            margin="md"
            styles={customTextInputStyle}
            value={flashCardTranslation}
            onChange={(e) => setFlashCardTranslation(e.currentTarget.value)}
          />
          <FlashcardFormActions
            setFlashCardText={setFlashCardText}
            setFlashCardTranslation={setFlashCardTranslation}
            flashCardText={flashCardText}
            flashCardTranslation={flashCardTranslation}
            closeModal={close}
            buttonText={buttonText}
            handleSubmit={handleSubmit}
          />
        </div>
      </Modal>
      {TriggerButton}
    </>
  );
}
