//Redux Store
import store from "redux/store/store";

export const usernameChange = (username) =>
    store.dispatch({
        type: "profile/usernameChange",
        payload: username,
    });

export const apiFetchSuccess = (data) =>
    store.dispatch({
        type: "feed/articlesSuccess",
        payload: data,
    });

export const apiFetchFailed = () =>
    store.dispatch({
        type: "feed/articlesFailed",
    });

export const apiFetchLoading = () =>
    store.dispatch({
        type: "feed/articlesLoading",
    });

export const addNote = (data) => {
    store.dispatch({
        type: "notes/addNote",
        payload: data,
    });
};

export const removeNote = (index) => {
    store.dispatch({
        type: "notes/removeNote",
        payload: index,
    });
};

export const addArticle = (data) => {
    store.dispatch({
        type: "saved/addArticle",
        payload: data,
    });
};

export const removeArticle = (identifier) => {
    store.dispatch({
        type: "saved/removeArticle",
        payload: identifier,
    });
};
