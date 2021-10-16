import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "redux/reducers/reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const persistedState = localStorage.getItem("state")
    ? JSON.parse(localStorage.getItem("state"))
    : {};

const store = createStore(
    rootReducer,
    persistedState,
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => {
    window.localStorage.setItem("state", JSON.stringify(store.getState()));
});

export default store;
