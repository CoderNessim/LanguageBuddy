import Button from '../Button';
import { Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import ModalHeader from '../ModalWindow/ModalHeader';
import FlashcardNavigation from './FlashcardNavigation';
import React from 'react';
import FlashcardPaper from './FlashcardPaper';
/**
 * @returns the bottom part of the flashcard carousel
 * includes navigation tools and a button to view all flashcards 
 */
export default function FlashcardFooter({
  flashCards,
  currentFlashcardIndex,
  handlePrev,
  handleNext,
  handleDelete,
  setFlashCards,
}) {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="flashcard-footer">
      <div className="flashcard-footer-wrapper">
        <FlashcardNavigation
          flashCards={flashCards}
          currentFlashcardIndex={currentFlashcardIndex}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
        <div style={{ marginTop: '20px' }}>
          <Modal
            opened={opened}
            onClose={close}
            title={<ModalHeader title="All Flashcards" />}
            fullScreen
            radius={0}
            transitionProps={{ transition: 'fade', duration: 200 }}
            closeButtonProps={{ size: 'xl' }}
          >
            {flashCards.map((card, index) => (
              <React.Fragment key={index}>
                <FlashcardPaper
                  flashCards={flashCards}
                  index={index}
                  card={card}
                  handleDelete={handleDelete}
                  setFlashCards={setFlashCards}
                />
              </React.Fragment>
            ))}
          </Modal>

          <Button text="View All" onClick={open} />
        </div>
      </div>
    </div>
  );
}
