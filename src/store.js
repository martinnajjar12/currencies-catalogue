import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import filterReducer from './reducers/filterReducer';

const store = createStore(filterReducer, applyMiddleware(thunk));

export default store;
