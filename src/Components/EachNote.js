import { useState } from "react";
import { Pin } from "./Pin";
import { ColorPicker } from "./ColorPicker";
import { InputNote } from "./InputNote";
import "./eachNoteStyles.css";
import { useNotes } from "../Context";

export function EachNote({ id, note }) {
  const [isEditMode, setEditMode] = useState(false);

  const { dispatch } = useNotes();

  return (
    <div className="grid-item-stretch">
      <div
        className="grid-item-note input-container"
        style={{
          backgroundColor: note.notecolor,
          visibility: isEditMode ? "hidden" : "visible"
        }}
      >
        <div
          className="input-text-section-container"
          onClick={() => {
            setEditMode((flag) => !flag);
          }}
        >
          <div className="input-text-section">
            <h3>{note.title}</h3>
            <p>{note.desc}</p>
          </div>
          <div>
            <Pin
              note={note}
              pinClickHandler={(note) =>
                dispatch({
                  type: "UPDATE_NOTE",
                  payload: { ...note, isPinned: !note.isPinned }
                })
              }
            />
          </div>
        </div>

        <div className="edit-section-container">
          <div className="edit-section">
            <span className="tag">{note.tag}</span>
            <ColorPicker
              note={note}
              colorPickedHandler={(color) =>
                dispatch({
                  type: "UPDATE_NOTE",
                  payload: { ...note, notecolor: color }
                })
              }
            />
          </div>

          <button
            onClick={() => {
              dispatch({ type: "DELETE_NOTE", payload: note });
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>
      </div>

      {isEditMode && (
        <div className="editInput-container">
          <div className="editInput">
            <InputNote
              noteExisting={note}
              saveHandler={(note) => {
                dispatch({ type: "UPDATE_NOTE", payload: note });
                setEditMode(false);
              }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
