import { createContext, useContext, useReducer } from "react";
import { notesReducer } from "./notes-reducer";

const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const initialState = {
    notes: [
      {
        id: 1,
        title: "Go to market",
        desc: "Buy eggs,bread,butter",
        isPinned: true,
        tag: "Work",
        notecolor: "#f28983"
      },
      {
        id: 2,
        title: "Go to school",
        desc: "Buy eggs,bread,butter",
        isPinned: false,
        tag: "Home",
        notecolor: "#CBF0F8"
      }
    ],
    tags: ["Work", "Home", "Class"]
  };

  const [state, dispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={{ state, dispatch }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
