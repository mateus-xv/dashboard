//React Modules
import React from "react";

//API Async Function
import getNews from "utils/getNews";

const Topics = () => {
	//Returns the className based on the hash
	const urlCheck = () => {
		const path = window.location.hash;
		if (path === "#/feed") return "topics--feed";

		return "topics";
	};

	return (
		<section className={urlCheck()}>
			<h2 className="topics__title">Topics</h2>
			<ul className="topics__container">
				<li onClick={() => getNews("arts")} className="topics__single">
					Arts
				</li>
				<li onClick={() => getNews("automobiles")} className="topics__single">Automobiles</li>
				<li onClick={() => getNews("business")} className="topics__single">Business</li>
				<li onClick={() => getNews("food")} className="topics__single">Food</li>
				<li onClick={() => getNews("health")} className="topics__single">Health</li>
				<li onClick={() => getNews("movies")} className="topics__single">Movies</li>
				<li onClick={() => getNews("politics")} className="topics__single">Politics</li>
				<li onClick={() => getNews("science")} className="topics__single">Science</li>
				<li onClick={() => getNews("sports")} className="topics__single">Sports</li>
				<li onClick={() => getNews("technology")} className="topics__single">Technology</li>
				<li onClick={() => getNews("travel")} className="topics__single">Travel</li>
				<li onClick={() => getNews("world")} className="topics__single">World</li>
			</ul>
		</section>
	);
};

export default Topics;
