import Translator from './components/translate boxes/Translator';
import CustomGrid from './components/CustomGrid/CustomGrid';
import { useLocalStorage } from './hooks/useLocalStorage';
import FlashcardCarousel from './components/FlashcardComponents/FlashcardCarousel';

function App() {
  const [flashCards, setFlashCards] = useLocalStorage([], 'flashCards');

  return (
    <>
      <Translator />
      <CustomGrid flashCards={flashCards} setFlashCards={setFlashCards} />
      <br />
      <FlashcardCarousel
        flashCards={flashCards}
        setFlashCards={setFlashCards}
      />
    </>
  );
}

export default App;
