function TextDisplay({
  isSentenceLoading,
  isTranslationLoading,
  sentenceError,
  showTranslation,
  translatedText,
  sentence,
}) {
  // Determine what text to display
  function determineText() {
    if (isSentenceLoading) return 'Loading...';
    else if (isTranslationLoading) return 'Loading Translation...';
    else if (sentenceError) return sentenceError;
    else if (showTranslation && translatedText) return translatedText;
    return sentence;
  }

  return <p className="lead-grid-textDisplay">{determineText()}</p>;
}

export default TextDisplay;
