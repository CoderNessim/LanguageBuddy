import Select from '../Select';
/** 
 * @returns the container on the right side of the translator component
 * that holds the translations and the language to select to translate to
 */
export default function TranslatedTo({
  children,
  languageTo,
  setLanguageTo,
  translatedText,
  isLoading,
  error,
  setTranslatedText
}) {
  function onLanguageTo(e) {
    setLanguageTo(e.target.value);
    setTranslatedText('');  
  }
  return (
    <div className="col-md-6">
      <Select language={languageTo} onLanguage={onLanguageTo} text="To:" />
      <div className="form-group">
        <textarea
          className="form-control"
          id="translated"
          placeholder="Translated text will be here"
          value={isLoading ? 'Loading...' : error ? error : translatedText}
          disabled={true}
        ></textarea>
      </div>
      {children}
    </div>
  );
}
