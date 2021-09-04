//React Modules
import React from "react";

//Components
import Article from "components/Main/shared/Article/Article";
import Topics from "components/Main/shared/Topics/Topics";

const Feed = () => {
	return (
		<React.Fragment>
			<div className="column-wrapper">
				<Topics />
			</div>
			<div className="cards-wrapper">
				<Article
					title="Lorem Lorem"
					body="Labore consequat nulla ut elit anim cupidatat enim cillum elit
				ad dolor. Pariatur fugiat dolore in culpa culpa sed sint
				excepteur in esse enim nisi sint ad anim magna exercitation sint
				reprehenderit pariatur irure laboris pariatur commodo irure sed
				irure exercitation ad laborum aute mollit reprehenderit
				cupidatat pariatur."
				/>
			</div>
		</React.Fragment>
	);
};

export default Feed;
