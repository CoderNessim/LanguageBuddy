import Translator from '../translate boxes/Translator';
import CustomGrid from '../CustomGrid/CustomGrid';
import FlashcardCarousel from '../FlashcardComponents/FlashcardCarousel';

function AppHomePage() {
  return (
    <>
      <Translator />
      <CustomGrid />
      <br />
      <FlashcardCarousel />
    </>
  );
}

export default AppHomePage;
