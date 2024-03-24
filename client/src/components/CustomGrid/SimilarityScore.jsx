import Button from "../Button";

export default function SimilarityScore({ score, text, setIsTranslationSubmitted }) {

  function onSimilarityScore() {
    if (!text) return;
    //changing value of isTranslationSubmitted triggers useSimilarityScore hook
    setIsTranslationSubmitted((prev) => !prev);
  }
  
  return (
    <>
    <Button text="Check Similarity" onClick={onSimilarityScore} />
    <div>
      <span className="translation-score">
        Score will appear here:
      </span>
      {score >= 0 && (
        <p className="translation-score">{score}%</p>
      )}
    </div>
  </>
  );
}
