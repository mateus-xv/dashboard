//Redux Modules
import { combineReducers } from "redux";

//Reducers
import profileReducer from "./slices/profile/profileReducer";

const rootReducer = combineReducers({
    profile: profileReducer,
});

export default rootReducer;
