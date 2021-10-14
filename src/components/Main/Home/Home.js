//React Modules
import React from 'react';

//Components
import News from './News';
import Topics from 'components/Main/shared/Topics/Topics';
import Support from './Support';
import LastActivity from './LastActivity';

const Home = () => {
	return(
		<React.Fragment>	
			<div className="cards-wrapper">
				<News/>
				<Topics/>
				<Support/>
			</div>	
			<div className="column-wrapper">
				<LastActivity/>
			</div>
		</React.Fragment>
	);
}

export default Home;
