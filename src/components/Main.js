//React Modules
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

//Components
import Home from './Home'
import Feed from './Feed'
import Notes from './Notes'
import Profile from './Profile'
import Saved from './Saved'

const Main = () => {
	return(
		<main>
			<Switch>
				<Route path="/" component={Home}/>
				<Route path="/feed" component={Feed}/>
				<Route path="/profile" component={Profile}/>
				<Route path="/saved" component={Saved}/>
				<Route path="/notes" component={Notes}/>
				<Redirect to="/"/>
			</Switch>			
		</main>
	);
};

export default Main;