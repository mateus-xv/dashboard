//React Modules
import React from "react";

const Article = ({ title, body, url }) => {
	return (
		<section className="article">
			<h2 className="article__title">{title}</h2>
			<p className="article__body">{body}</p>
			<div className="article__actions">
				<button className="article__save">
					<i className="far fa-bookmark"></i>
				</button>
				<a href={url} target="_blank" rel="noreferrer" className="article__see-more">
					See More <i className="fas fa-arrow-circle-right"></i>
				</a>
			</div>
		</section>
	);
};

export default Article;
