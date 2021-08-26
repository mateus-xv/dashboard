//React Modules
import React from 'react';

//Components
import Article from '../shared/Article/Article'
import Topics from '../shared/Topics/Topics'

const Feed = () => {
	return(
		<React.Fragment>	
			<div className="column-wrapper">
				<Topics />
			</div>
			<div className="cards-wrapper">
				<Article />
			</div>
		</React.Fragment>
	);
}

export default Feed;
