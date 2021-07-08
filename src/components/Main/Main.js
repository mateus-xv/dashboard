//React Modules
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

//Components
import Home from './Home/Home'
import Feed from './Feed/Feed'
import Notes from './Notes/Notes'
import Profile from './Profile/Profile'
import Saved from './Saved/Saved'

const Main = () => {
	return(
		<main className="clearfix">
			<Switch>
				<Route path="/feed" component={Feed}/>
				<Route path="/profile" component={Profile}/>
				<Route path="/saved" component={Saved}/>
				<Route path="/notes" component={Notes}/>
				<Route path="/" component={Home}/>
				<Redirect to="/"/>
			</Switch>			
		</main>
	);
};

export default Main;