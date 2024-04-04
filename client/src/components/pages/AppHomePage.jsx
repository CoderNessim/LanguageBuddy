import Translator from '../translate boxes/Translator';
import CustomGrid from '../CustomGrid/CustomGrid';
import FlashcardCarousel from '../FlashcardComponents/FlashcardCarousel';

function AppHomePage({
  flashCards,
  setFlashCards,
  currentFlashcardIndex,
  setCurrentFlashcardIndex,
  handleDelete,
}) {
  return (
    <>
      <Translator />
      <CustomGrid flashCards={flashCards} setFlashCards={setFlashCards} />
      <br />
      <FlashcardCarousel
        flashCards={flashCards}
        setFlashCards={setFlashCards}
        currentFlashcardIndex={currentFlashcardIndex}
        setCurrentFlashcardIndex={setCurrentFlashcardIndex}
        handleDelete={handleDelete}
      />
    </>
  );
}

export default AppHomePage;
