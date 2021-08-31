//React Modules
import React from "react";

const Article = () => {
	return (
		<section className="article">
			<h2 className="article__title">Lorem Ipsum</h2>
			<p className="article__body">
				Labore consequat nulla ut elit anim cupidatat enim cillum elit
				ad dolor. Pariatur fugiat dolore in culpa culpa sed sint
				excepteur in esse enim nisi sint ad anim magna exercitation sint
				reprehenderit pariatur irure laboris pariatur commodo irure sed
				irure exercitation ad laborum aute mollit reprehenderit
				cupidatat pariatur.
			</p>
			<div className="article__actions">
				<button className="article__save">
					<i className="far fa-bookmark"></i>
				</button>
				<button className="article__see-more">
					See More <i className="fas fa-arrow-circle-right"></i>
				</button>
			</div>
		</section>
	);
};

export default Article;
