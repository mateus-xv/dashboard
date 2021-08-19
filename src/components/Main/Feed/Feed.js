//React Modules
import React from 'react';

//Components
import Article from '../shared/Article/Article'
import Topics from '../shared/Topics/Topics'

const Feed = () => {
	return(
		<React.Fragment>	
			<div className="cards-wrapper">
				<Article />
			</div>
			<div className="column-wrapper">
				<Topics />
			</div>
		</React.Fragment>
	);
}

export default Feed;
