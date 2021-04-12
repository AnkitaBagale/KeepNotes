import { useReducer } from "react";
import "./inputNoteStyles.css";
import { Pin } from "./Pin";
import { ColorPicker } from "./ColorPicker";
import { useNotes } from "../Context";
import { v4 as uuidv4 } from "uuid";

const initialInput = {
  id: null,
  title: "",
  desc: "",
  tag: "Work",
  isPinned: false,
  notecolor: "#FFFFFF"
};

export function InputNote({ noteExisting = initialInput, saveHandler }) {
  const formReducer = (formState, { type, payload }) => {
    switch (type) {
      case "SET_TITLE": {
        return { ...formState, title: payload };
      }
      case "SET_DESC": {
        return { ...formState, desc: payload };
      }
      case "SET_TAG": {
        return { ...formState, tag: payload };
      }
      case "SET_IS_PINNED": {
        return { ...formState, isPinned: payload };
      }
      case "SET_NOTE_COLOR": {
        return { ...formState, notecolor: payload };
      }
      case "SET_ERROR": {
        return { ...formState, error: payload };
      }
      case "CLEAR_FORM": {
        return initialInput;
      }
      default:
        return formState;
    }
  };
  const [formState, formDispatch] = useReducer(formReducer, noteExisting);
  const {
    state: { tags }
  } = useNotes();

  return (
    <div
      className="input-container"
      style={{ backgroundColor: formState.notecolor }}
    >
      <div className="input-text-section-container flexGrow">
        <div className="input-text-section">
          <textarea
            rows="1"
            className="text title-text-style"
            onChange={(e) =>
              formDispatch({ type: "SET_TITLE", payload: e.target.value })
            }
            type="text"
            placeholder="Title"
            value={formState.title}
          />

          <textarea
            rows="1"
            className="text"
            onChange={(e) =>
              formDispatch({ type: "SET_DESC", payload: e.target.value })
            }
            type="text"
            placeholder="Take a note..."
            value={formState.desc}
          />
        </div>

        <div>
          <Pin
            note={formState}
            pinClickHandler={(note) =>
              formDispatch({
                type: "SET_IS_PINNED",
                payload: !note.isPinned
              })
            }
          />
        </div>
      </div>

      <div className="edit-section-container">
        <div className="edit-section">
          <select
            className="tag"
            onChange={(e) =>
              formDispatch({ type: "SET_TAG", payload: e.target.value })
            }
            value={formState.tag}
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
            note={formState}
            colorPickedHandler={(color) =>
              formDispatch({
                type: "SET_NOTE_COLOR",
                payload: color
              })
            }
          />
        </div>
        <button
          onClick={() => {
            if (formState.title || formState.desc) {
              if (formState.id === null) {
                saveHandler({ ...formState, id: uuidv4() });
                formDispatch({ type: "CLEAR_FORM" });
              } else {
                saveHandler(formState);
              }
            } else {
              formDispatch({
                type: "SET_ERROR",
                payload: "please fill title or description to continue!"
              });
            }
          }}
        >
          Save
        </button>
      </div>
      <div>{formState.error}</div>
    </div>
  );
}
