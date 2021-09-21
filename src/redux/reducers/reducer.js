//Redux Modules
import { combineReducers } from "redux";

//Reducers
import profileReducer from "./slices/profileReducer";
import feedReducer from "./slices/feedReducer";
import notesReducer from "./slices/notesReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    feed: feedReducer,
    notes: notesReducer,
});

export default rootReducer;
