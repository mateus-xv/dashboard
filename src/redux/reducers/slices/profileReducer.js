//Handles local storage, setting username as "Guest" if null
const handleStorage = () => {
    const username = "Guest";
    if (!window.localStorage.getItem("username")) {
        window.localStorage.setItem("username", username);
        return username;
    }
    return window.localStorage.getItem("username");
};

const initialState = {
    username: handleStorage(),
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
            return state;
    }
}
