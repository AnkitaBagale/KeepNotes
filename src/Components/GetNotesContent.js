import { useNotes } from "../Context";
import { EachNote } from "./EachNote";

export function GetNotesContent() {
  const {
    state: { notes }
  } = useNotes();

  const { pinnedNotes, otherNotes } =
    notes.length === 0
      ? { pinnedNotes: [], otherNotes: [] }
      : [...notes]
          .sort((note1, note2) => Number(note2.id) - Number(note1.id))
          .reduce(
            (segregate, note) => {
              let newNote = <EachNote key={note.id} id={note.id} note={note} />;
              return note.isPinned
                ? {
                    ...segregate,
                    pinnedNotes: [...segregate.pinnedNotes, newNote]
                  }
                : {
                    ...segregate,
                    otherNotes: [...segregate.otherNotes, newNote]
                  };
            },
            { pinnedNotes: [], otherNotes: [] }
          );

  return (
    <div>
      <h5 style={{ display: pinnedNotes.length === 0 ? "none" : "block" }}>
        PINNED
      </h5>

      <div className="notes-keeping-area">{pinnedNotes}</div>

      <h5 style={{ display: otherNotes.length === 0 ? "none" : "block" }}>
        OTHERS
      </h5>

      <div className="notes-keeping-area">{otherNotes}</div>
    </div>
  );
}
