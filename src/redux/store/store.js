import {createStore} from 'redux';
import rootReducer from 'redux/reducers/reducer';

const store = createStore(rootReducer);

export default store;
