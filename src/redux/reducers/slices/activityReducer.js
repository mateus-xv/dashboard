const initialState = {
    activities: [],
};

export default function activityReducer(state = initialState, action) {
    switch (action.type) {
        case "activity/clearActivities": {
            return {
                ...state,
                activities: [],
            };
        }
        case "profile/usernameChange": {
            return {
                ...state,
                activities: [
                    ...state.activities,
                    `Changed username to "${action.payload}"`,
                ],
            };
        }
        case "saved/addArticle": {
            return {
                ...state,
                activities: [
                    ...state.activities,
                    `Added "${
                        action.payload.title.length > 50
                            ? action.payload.title.slice(0, 50).trim() + "..."
                            : action.payload.title.trim()
                    }" to saved articles`,
                ],
            };
        }
        case "saved/removeArticle": {
            return {
                ...state,
                activities: [
                    ...state.activities,
                    `Removed "${
                        action.payload.title.length > 50
                            ? action.payload.title.slice(0, 50).trim() + "..."
                            : action.payload.title.trim()
                    }" from saved articles`,
                ],
            };
        }
        case "notes/addNote": {
            return {
                ...state,
                activities: [
                    ...state.activities,
                    `Added "${
                        action.payload.title.length > 50
                            ? action.payload.title.slice(0, 50).trim() + "..."
                            : action.payload.title.trim()
                    }" to notes`,
                ],
            };
        }
        case "notes/removeNote": {
            return {
                ...state,
                activities: [
                    ...state.activities,
                    `Removed "${
                        action.payload.title.length > 50
                            ? action.payload.title.slice(0, 50).trim() + "..."
                            : action.payload.title.trim()
                    }" from notes`,
                ],
            };
        }
        default:
            return state;
    }
}
