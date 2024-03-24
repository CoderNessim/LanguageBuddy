import { SUPPORTED_LANGUAGES } from '../config/config';

export default function Select({
  language,
  onLanguage,
  text,
  setLanguageFullName,
}) {
  /**
   * language full name is needed to prompt AI for a phrase/word in specific langauge
   * @param {*} event
   */
  function handleLanguageChange(event) {
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    const selectedLanguageName =
      selectedOption.getAttribute('data-language-name');
    onLanguage(event);
    setLanguageFullName?.(selectedLanguageName);
  }

  return (
    <div className="form-group">
      <label htmlFor="from">{text}</label>
      <select name="from" value={language} onChange={handleLanguageChange}>
        {SUPPORTED_LANGUAGES.map((language, i) => (
          <option
            key={i}
            value={language.language}
            data-language-name={language.name}
          >
            {language.name}
          </option>
        ))}
      </select>
    </div>
  );
}
