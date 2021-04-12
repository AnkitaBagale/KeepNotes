import { useState } from "react";
import { InputNote } from "./InputNote";
import { GetNotesContent } from "./GetNotesContent";
import { TagsFilter } from "./TagsFilter";
import "./NotesStyles.css";
import { Footer } from "./Footer";
import { useNotes } from "../Context";

export function Notes() {
  const {
    state: { notes, tags },
    dispatch
  } = useNotes();

  const [selectedTag, setSelectedTag] = useState("All");

  return (
    <div className="grid-notes-area" style={{ minHeight: "100vh" }}>
      <h1 className="title-of-app">Keep</h1>
      <div className="sidebar">
        <TagsFilter
          tags={tags}
          setTags={dispatch}
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
        />
      </div>
      <div className="input-grid-section">
        <InputNote
          saveHandler={(note) => {
            dispatch({ type: "ADD_NOTE", payload: note });
          }}
        />
      </div>
      <div className="main-notes-grid">
        <GetNotesContent />
      </div>
      <div className="footer-grid">
        <Footer />
      </div>
    </div>
  );
}
