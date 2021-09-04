//React Modules
import React from "react";

//Components
import Article from "components/Main/shared/Article/Article";

const Saved = () => {
	return (
		<div className="saved">
			<div className="cards-wrapper">
				<Article
					title="Lorem Ipsum"
					body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sollicitudin rhoncus est, quis semper velit molestie id. Nam sit amet tincidunt est. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus at eros metus. Nam rutrum sem nec dolor facilisis euismod. Nunc venenatis luctus dui, vel egestas est iaculis sed. Maecenas et justo a orci elementum semper nec iaculis ante."
				/>
			</div>
		</div>
	);
};

export default Saved;
