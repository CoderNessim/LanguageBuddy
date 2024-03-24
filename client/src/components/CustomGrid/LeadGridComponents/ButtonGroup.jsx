import Button from '../../Button';

/**
 *  * @returns group of buttons for generating words and sentences
 */
export default function ButtonGroup({
  numWords,
  languageFullName,
  onRandomWords,
  onSentence,
}) {
  return (
    <div className="lead-grid-buttons">
      <Button
        text={numWords > 1 ? 'Generate Words' : 'Generate Word'}
        onClick={() => onRandomWords(numWords, languageFullName)}
      />
      <div>
        <Button text="Generate Phrase" onClick={onSentence} />
      </div>
    </div>
  );
}
