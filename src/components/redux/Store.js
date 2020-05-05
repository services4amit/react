import { createStore, combineReducers,compose,applyMiddleware } from 'redux';
import rootReducer from './reducers/RootReducer'
import thunk from 'redux-thunk'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const mystore = createStore(rootReducer,composeEnhancers());

const mystore = createStore(rootReducer,applyMiddleware(thunk));

export default mystore;