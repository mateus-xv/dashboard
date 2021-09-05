//Action Creator
import {apiFetchSuccess} from 'redux/creators/actionCreators';

export async function getNews(section) {
	let apiKey = process.env.REACT_APP_NEWSAPI_KEY,
		url = `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${apiKey}`;
	let response = await fetch(url);
	let data = await response.json();
	return data;
}

export default async function getNewsCaller(section = "home"){
	getNews(section).then((res) => {
		apiFetchSuccess(res);
	});
}
