import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { appReducer } from './reducers/app';


const store = createStore(appReducer, applyMiddleware(thunk));

export { store };