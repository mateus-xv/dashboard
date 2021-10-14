//Redux Modules
import { combineReducers } from "redux";

//Reducers
import profileReducer from "./slices/profileReducer";
import feedReducer from "./slices/feedReducer";
import notesReducer from "./slices/notesReducer";
import savedReducer from "./slices/savedReducer";
import activityReducer from "./slices/activityReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    feed: feedReducer,
    notes: notesReducer,
    saved: savedReducer,
    activity: activityReducer
});

export default rootReducer;
