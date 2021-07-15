//React Modules
import React from 'react';

//Components
import News from './News';
import Topics from '../shared/Topics/Topics';
import Support from './Support';

const Home = () => {
	return(
		<div className="cards-wrapper">
			<News/>
			<Topics/>
			<Support/>
		</div>	
	);
}

export default Home;