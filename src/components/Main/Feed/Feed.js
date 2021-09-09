//React Modules
import React from "react";

//Redux Modules
import { useSelector } from "react-redux";

//Components
import Article from "components/Main/shared/Article/Article";
import Topics from "components/Main/shared/Topics/Topics";

//API Async Function
import getNews from "utils/getNews";

//Doing API request and adding to the store
getNews();

const selector = (state) => state.feed;

const Feed = () => {
	//Component State
	const state = useSelector(selector);

	return (
		<React.Fragment>
			<div className="column-wrapper">
				<Topics />
			</div>
			<div className="cards-wrapper">
				{state.articles.results != null? state.articles.results.map((article, index) => (
					<Article
						key={index}
						title={article.title}
						body={article.abstract}
						url={article.url}
					/>
				)) : null}
			</div>
		</React.Fragment>
	);
};

export default Feed;
