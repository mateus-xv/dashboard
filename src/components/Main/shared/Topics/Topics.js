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
					<button className="topics__button">Arts</button>
				</li>
				<li className="topics__single">
					<button
						onClick={() => getNews("automobiles")}
						className="topics__button"
					>
						Automobiles
					</button>
				</li>
				<li className="topics__single">
					<button
						onClick={() => getNews("business")}
						className="topics__button"
					>
						Business
					</button>
				</li>
				<li className="topics__single">
					<button
						onClick={() => getNews("food")}
						className="topics__button"
					>
						Food
					</button>
				</li>
				<li className="topics__single">
					<button
						onClick={() => getNews("health")}
						className="topics__button"
					>
						Health
					</button>
				</li>
				<li className="topics__single">
					<button
						onClick={() => getNews("movies")}
						className="topics__button"
					>
						Movies
					</button>
				</li>
				<li className="topics__single">
					<button
						onClick={() => getNews("politics")}
						className="topics__button"
					>
						Politics
					</button>
				</li>
				<li className="topics__single">
					<button
						onClick={() => getNews("science")}
						className="topics__button"
					>
						Science
					</button>
				</li>
				<li className="topics__single">
					<button
						onClick={() => getNews("sports")}
						className="topics__button"
					>
						Sports
					</button>
				</li>
				<li className="topics__single">
					<button
						onClick={() => getNews("technology")}
						className="topics__button"
					>
						Technology
					</button>
				</li>
				<li className="topics__single">
					<button
						onClick={() => getNews("travel")}
						className="topics__button"
					>
						Travel
					</button>
				</li>
				<li className="topics__single">
					<button
						onClick={() => getNews("world")}
						className="topics__button"
					>
						World
					</button>
				</li>
			</ul>
		</section>
	);
};

export default Topics;
