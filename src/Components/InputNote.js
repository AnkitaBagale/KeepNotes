import { useState } from "react";
import "./inputNoteStyles.css";
import { Pin } from "./Pin";
import { ColorPicker } from "./ColorPicker";

export function InputNote({
  id,
  titleEx = "",
  descEx = "",
  tagEx = "Work",
  isPinnedEx = false,
  notecolorEx = "#FFFFFF",
  notes,
  setNotes,
  tags,
  isEditMode,
  setEditMode
}) {
  const [title, setTitle] = useState(titleEx);
  const [desc, setDesc] = useState(descEx);
  const [tag, setTag] = useState(tagEx);
  const [isPinned, setPinned] = useState(isPinnedEx);
  const [notecolor, setNotecolor] = useState(notecolorEx);
  const [error, setError] = useState("");

  function addNote() {
    if (Object.keys(notes).includes(id)) {
      setNotes({
        ...notes,
        [id]: {
          title: title,
          desc: desc,
          tag: tag,
          isPinned: isPinned,
          notecolor: notecolor
        }
      });
      setEditMode(!isEditMode);
    } else {
      if (title && desc) {
        setNotes({
          ...notes,
          [`${Object.keys(notes).length + 1}`]: {
            title: title,
            desc: desc,
            tag: tag,
            isPinned: isPinned,
            notecolor: notecolor
          }
        });
        setTitle("");
        setDesc("");
        setTag("Work");
        setPinned(false);
        setNotecolor("#FFFFFF");
        setError("");
      } else {
        setError("Please fill title,description");
      }
    }
  }
  function pinClickHandler() {
    setPinned(!isPinned);
  }
  function colorChangeHandler(color) {
    setNotecolor(color);
  }
  return (
    <div className="input-container" style={{ backgroundColor: notecolor }}>
      <div className="input-text-section-container flexGrow">
        <div className="input-text-section">
          <textarea
            rows="1"
            className="text title-text-style"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Title"
            value={title}
            autoFocus
          />

          <textarea
            rows="1"
            className="text"
            onChange={(e) => {
              setDesc(e.target.value);
            }}
            type="text"
            placeholder="Take a note..."
            value={desc}
          />
        </div>
        <div>
          <Pin
            isPinned={isPinned}
            setPinned={setPinned}
            clickHandler={pinClickHandler}
          />
        </div>
      </div>
      <div className="edit-section-container">
        <div className="edit-section">
          <select
            className="tag"
            onChange={(e) => {
              setTag(e.target.value);
            }}
            value={tag}
            name="tagSelector"
          >
            {tags.map((tag) => {
              return (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              );
            })}
          </select>
          <ColorPicker
            notecolor={notecolor}
            setNotecolor={setNotecolor}
            colorChangeHandler={colorChangeHandler}
          />
        </div>
        <button onClick={addNote}>Close</button>
      </div>
      <div>{error}</div>
    </div>
  );
}
