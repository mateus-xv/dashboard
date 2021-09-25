const initialState = {
    notes: [],
};

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case "notes/addNote": {
            return {
                ...state,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            }
        }
        default:
            return state;
    }
}
