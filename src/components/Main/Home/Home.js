//React Modules
import React from 'react';

//Components
import News from './News';
import Topics from '../shared/Topics/Topics';
import Support from './Support';
import Activity from './Activity';

const Home = () => {
	return(
		<React.Fragment>	
			<div className="cards-wrapper">
				<News/>
				<Topics/>
				<Support/>
			</div>	
			<div className="column-wrapper">
				<Activity/>
			</div>
		</React.Fragment>
	);
}

export default Home;