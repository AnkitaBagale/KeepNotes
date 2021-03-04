import "./pinStyles.css";

export function Pin({ setPinned, isPinned, clickHandler }) {
  return (
    <button className="note-pin" onClick={clickHandler}>
      <i
        className="fas fa-thumbtack"
        style={{
          color: isPinned ? "var(--primary-color)" : "var(--inactive-color)"
        }}
      ></i>
    </button>
  );
}
