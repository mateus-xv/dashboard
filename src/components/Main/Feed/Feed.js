//React Modules
import React from 'react';

//Components
import Article from './Article'

const Feed = () => {
	return(
		<React.Fragment>	
			<div className="cards-wrapper">
				<Article/>
			</div>
			<div className="column-wrapper">
			</div>
		</React.Fragment>
	);
}

export default Feed;