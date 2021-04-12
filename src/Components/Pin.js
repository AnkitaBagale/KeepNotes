import "./pinStyles.css";

export function Pin({ note, pinClickHandler }) {
  const pinClickHandlerWrapper = (note) => {
    pinClickHandler(note);
  };
  return (
    <button className="note-pin" onClick={() => pinClickHandlerWrapper(note)}>
      <i
        className="fas fa-thumbtack"
        style={{
          color: note.isPinned
            ? "var(--primary-color)"
            : "var(--inactive-color)"
        }}
      ></i>
    </button>
  );
}
