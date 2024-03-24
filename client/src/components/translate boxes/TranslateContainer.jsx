/**
 * @returns a wrapper for the translation components
 */
export default function TranslateContainer({ children, setIsSubmitted }) {

  function onSubmitTranslation(e) {
    e.preventDefault();
    setIsSubmitted(s => !s);
  }
  return (
    <div className="contact-section">
      <div className="container">
        <form onSubmit={onSubmitTranslation}>{children}</form>
      </div>
    </div>
  );
}

