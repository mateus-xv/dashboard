//Redux Modules
import { combineReducers } from "redux";

//Reducers
import profileReducer from "./slices/profileReducer";
import feedReducer from "./slices/feedReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
    feed: feedReducer,
});

export default rootReducer;
