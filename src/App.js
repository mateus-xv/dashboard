//React Modules
import React from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

//Redux
import store from './redux/store/store';

//Components
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

//Stylesheets
import './scss/base/index.scss'
import './scss/layout/index.scss'
import './scss/module/index.scss'
import './scss/state/index.scss'
import '@fortawesome/fontawesome-free/css/all.css'

function App(){
    return(
        <Provider store={store}>
            <HashRouter>
                <Aside />
                <Header />
                <Main />
            </HashRouter>
        </Provider>
    )
}

export default App