import { useState } from "react";
import { InputNote } from "./InputNote";
import { EachNote } from "./EachNote";
import { TagsFilter } from "./TagsFilter";
import "./NotesStyles.css";
import { Footer } from "./Footer";

// const notesArray = {
//   id1: {
//     title: "Go to market",
//     desc: "Buy eggs,bread,butter",
//     isPinned: false,
//     tag: "Home",
//     notecolor: "#676767"
//   }
// };

export function Notes() {
  const [notes, setNotes] = useState({});
  const noteIds = Object.keys(notes);
  const [tags, setTags] = useState(["Work", "Home", "Class"]);
  const [selectedTag, setSelectedTag] = useState("All");
  // console.log(notes);

  function getNotes() {
    let pinnedNotesObject = [];
    let otherNotesObject = [];
    if (noteIds) {
      noteIds
        .sort((id1, id2) => Number(id2) - Number(id1))
        .map((id) => {
          let pushedNote = (
            <EachNote
              key={id}
              id={id}
              item={notes[id]}
              notes={notes}
              setNotes={setNotes}
              tags={tags}
            />
          );
          if (notes[id].isPinned) {
            if (selectedTag === "All") {
              pinnedNotesObject.push(pushedNote);
            } else {
              if (selectedTag === notes[id].tag) {
                pinnedNotesObject.push(pushedNote);
              }
            }
          } else {
            if (selectedTag === "All") {
              otherNotesObject.push(pushedNote);
            } else {
              if (selectedTag === notes[id].tag) {
                otherNotesObject.push(pushedNote);
              }
            }
          }
          return "";
        });
    }
    // console.log(pinnedNotesObject, otherNotesObject);
    return (
      <div>
        <h5
          style={{ display: pinnedNotesObject.length === 0 ? "none" : "block" }}
        >
          PINNED
        </h5>
        <div className="notes-keeping-area">{pinnedNotesObject}</div>
        <h5
          style={{ display: otherNotesObject.length === 0 ? "none" : "block" }}
        >
          OTHERS
        </h5>
        <div className="notes-keeping-area">{otherNotesObject}</div>
      </div>
    );
  }

  return (
    <div className="grid-notes-area" style={{ minHeight: "100vh" }}>
      <h1 className="title-of-app">Keep</h1>
      <div className="sidebar">
        <TagsFilter
          tags={tags}
          setTags={setTags}
          setSelectedTag={setSelectedTag}
          selectedTag={selectedTag}
        />
      </div>
      <div className="input-grid-section">
        <InputNote notes={notes} setNotes={setNotes} tags={tags} />
      </div>
      <div className="main-notes-grid">{getNotes()}</div>
      <div className="footer-grid">
        <Footer />
      </div>
    </div>
  );
}
