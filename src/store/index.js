import {createStore, combineReducers, applyMiddleware} from 'redux';

import thunk from 'redux-thunk';

import reviewReducer from './review-reducer';


const reducers = combineReducers({
  reviews: reviewReducer
});

export default createStore(reducers, applyMiddleware(thunk));