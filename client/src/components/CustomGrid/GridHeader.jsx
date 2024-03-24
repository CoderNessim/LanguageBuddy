import Select from '../Select';
/** 
 * @returns the header of the grid component
 * that holds the language to select to generate in
 * and the language to select to type in. Full name of language is needed to
 *  prompt AI for a 
 * phrase/word in specific langauge
 * 
 */
export default function GridHeader({
  typingIn,
  setTypingIn,
  generatingIn,
  setGeneratingIn,
  setLanguageFullName,
  setShowTranslation,
  setSentence,
  setIsTranslationSubmitted,
  setText,
  setScore,
}) {
  //clears input field, translates sentence to new language, 
  //sets similarity score back to null
  function onTypingIn(e) {
    setTypingIn(e.target.value);
    setShowTranslation(false);
    setIsTranslationSubmitted((prev) => !prev);
    setText('');
    setScore(-1);
  }
  function onGeneratingIn(e) {
    setGeneratingIn(e.target.value);
    setShowTranslation(false);
    setSentence('');
  }
  return (
    <div className="grid-header">
      <div className="grid-header-content">
        <Select
          text="Generating in:"
          language={generatingIn}
          onLanguage={onGeneratingIn}
          setLanguageFullName={setLanguageFullName}
        />
      </div>
      <div className="grid-header-content grid-header-typingIn">
        <Select text="Typing in:" language={typingIn} onLanguage={onTypingIn} />
      </div>
    </div>
  );
}
