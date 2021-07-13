//React Modules
import React from 'react';

//Components
import News from './News';
import Topics from '../shared/Topics/Topics';

const Home = () => {
	return(
		<div className="cards-wrapper">
			<News/>
			<Topics/>
		</div>	
	);
}

export default Home;