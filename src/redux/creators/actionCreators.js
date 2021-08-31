//Redux Store
import store from '../store/store';

export const usernameChange = (username) => store.dispatch({
    type: "profile/usernameChange",
    payload: username
})
