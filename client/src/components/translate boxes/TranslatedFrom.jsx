import Select from '../Select';
/** 
 * @returns the container on the left side of the translator component
 * that holds the text to be inputted for translation
 *  and the language to select to translate from
 */
export default function TranslatedFrom({
  text,
  setText,
  languageFrom,
  setLanguageFrom,
  setTranslatedText
}) {
  function onLanguageFrom(e) {
    setLanguageFrom(e.target.value);
    setTranslatedText('');
  }

  function onText(e) {
    setText(e.target.value);
  }
  return (
    <div className="col-md-6 form-line">
      <Select
        language={languageFrom}
        onLanguage={onLanguageFrom}
        text="From:"
      />
      <div className="form-group">
        <textarea
          value={text}
          onChange={onText}
          className="form-control"
          id="original"
          placeholder="Enter Your Text"
          maxLength={250}
        ></textarea>
      </div>
    </div>
  );
}
