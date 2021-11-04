//Redux Store
import store from "redux/store/store";

//Action Creator
import {
    apiFetchSuccess,
    apiFetchLoading,
    apiFetchFailed,
} from "redux/creators/actionCreators";

//Cache Handler
import getCachedNews from './getCachedNews';

//Delay between function calls
const delay = 1000;
let lastExecution = 0;

export function getNews(section) {
    return async function getNewsThunk() {
        //Prevent function calls inside delay range
        if (lastExecution + delay < Date.now()) {
            lastExecution = Date.now();
            let apiKey = process.env.REACT_APP_NEWSAPI_KEY,
                url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
            apiFetchLoading();
            const response = await getCachedNews(url);
            if (!response.ok) {
                apiFetchFailed();
            } else {
                const data = await response.json();
                apiFetchSuccess(data);
            }
        }
    };
}

export default function getNewsCaller(section = "home") {
    store.dispatch(getNews(section));
}
