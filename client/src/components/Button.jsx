export default function Button({ text, onClick }) {
  return (
    <button
      className="btn btn-default submit"
      onClick={(e) => {
        e.target.blur();
        onClick?.();
      }}
    >
      {text}
    </button>
  );
}
