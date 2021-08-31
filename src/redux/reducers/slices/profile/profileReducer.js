const initialState = {
    username: "Guest",
};

export default function profileReducer(state = initialState, action) {
    switch (action.type) {
        case "profile/usernameChange": {
            return {
                ...state,
                username: action.payload,
            };
        }
        default:
            return state
    }
}
