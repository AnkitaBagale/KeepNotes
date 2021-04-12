export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD_NOTE":
      return { ...state, notes: [...state.notes, payload] };

    case "UPDATE_NOTE":
      return {
        ...state,
        notes: state.notes.map((note) =>
          note.id !== payload.id ? note : payload
        )
      };

    case "DELETE_NOTE":
      return {
        ...state,
        notes: state.notes.filter((note) => note.id !== payload.id)
      };

    case "ADD_TAG":
      return { ...state, tags: [...state.tags, payload] };

    case "DELETE_TAG":
      return {
        ...state,
        tags: state.tags.filter((tag) => tag.id !== payload.id)
      };

    default:
      return state;
  }
};
