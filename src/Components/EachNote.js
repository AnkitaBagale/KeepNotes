import { useState } from "react";
import { Pin } from "./Pin";
import { ColorPicker } from "./ColorPicker";
import { InputNote } from "./InputNote";
import "./eachNoteStyles.css";

export function EachNote({ id, item, notes, setNotes, tags }) {
  const [isPinned, setPinned] = useState(item.isPinned);
  const [notecolor, setNotecolor] = useState(item.notecolor);
  const [isEditMode, setEditMode] = useState(false);
  function pinClickHandler() {
    setNotes({
      ...notes,
      [id]: {
        title: item.title,
        desc: item.desc,
        isPinned: !isPinned,
        tag: item.tag,
        notecolor: item.notecolor
      }
    });
    setPinned(!isPinned);
  }
  function colorChangeHandler(color) {
    setNotes({
      ...notes,
      [id]: {
        title: item.title,
        desc: item.desc,
        isPinned: item.isPinned,
        tag: item.tag,
        notecolor: color
      }
    });
    setNotecolor(color);
  }

  return (
    <div className="grid-item-stretch">
      <div
        className="grid-item-note input-container"
        style={{
          backgroundColor: item.notecolor,
          visibility: isEditMode ? "hidden" : "visible"
        }}
      >
        <div
          className="input-text-section-container"
          onClick={() => {
            setEditMode(!isEditMode);
          }}
        >
          <div className="input-text-section">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
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
            <span className="tag">{item.tag}</span>

            <ColorPicker
              notecolor={notecolor}
              setNotecolor={setNotecolor}
              colorChangeHandler={colorChangeHandler}
              setNotes={setNotes}
              notes={notes}
            />
          </div>

          <button
            onClick={() => {
              setNotes(
                Object.keys(notes).reduce((object, key) => {
                  if (key !== id) {
                    object[key] = notes[key];
                  }
                  return object;
                }, {})
              );
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>

      <div className={isEditMode ? "editInput-container" : ""}>
        <div className={isEditMode ? "editInput" : ""}>
          {isEditMode ? (
            <InputNote
              id={id}
              titleEx={item.title}
              descEx={item.desc}
              tagEx={item.tag}
              isPinnedEx={item.isPinned}
              notecolorEx={item.notecolor}
              notes={notes}
              setNotes={setNotes}
              tags={tags}
              isEditMode={isEditMode}
              setEditMode={setEditMode}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
