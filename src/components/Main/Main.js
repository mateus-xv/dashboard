//React Modules
import React from 'react';
import {Switch, Route, Redirect, useLocation} from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//Components
import Home from './Home/Home'
import Feed from './Feed/Feed'
import Notes from './Notes/Notes'
import Profile from './Profile/Profile'
import Saved from './Saved/Saved'

import 'scss/state/_animations.scss';

const Main = () => {
    const location = useLocation();
	return(
		<main className="clearfix">
            <TransitionGroup>
                <CSSTransition key={location.pathname} classNames='page' timeout={300}>
                    <div className="main-wrapper">
                        <Switch location={location}>
                            <Route path="/feed" component={Feed}/>
                            <Route path="/profile" component={Profile}/>
                            <Route path="/saved" component={Saved}/>
                            <Route path="/notes" component={Notes}/>
                            <Route path="/" component={Home}/>
                            <Redirect to="/"/>
                        </Switch>			
                    </div>
                </CSSTransition>
            </TransitionGroup>
		</main>
	);
};

export default Main;
