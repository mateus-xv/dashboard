//Redux Store 
import store from 'redux/store/store';

//Action Creator
import {apiFetchSuccess} from 'redux/creators/actionCreators';

export function getNews(section) {
    return async function getNewsThunk(){
        let apiKey = process.env.REACT_APP_NEWSAPI_KEY,
            url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();
        apiFetchSuccess(data);
        console.log(data);
    }
}

export default function getNewsCaller(section = "home"){
    store.dispatch(getNews(section));
}
