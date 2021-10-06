const initialState = {
    notes: [],
    amount: 0,
};

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case "notes/addNote": {
            return {
                ...state,
                notes: [
                    ...state.notes,
                    action.payload
                ],
                amount: state.amount + 1,
            }
        }
        
        case "notes/removeNote": {
            return {
                ...state,
                notes: state.notes.filter(note => note.noteId !== action.payload),
                amount: state.amount - 1,
            }
        }

        default:
            return state;
    }
}
