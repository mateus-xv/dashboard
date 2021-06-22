import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

function App(){
    return(
        <Provider>
            <BrowserRouter>
            </BrowserRouter>
        </Provider>
    )
}

export default App