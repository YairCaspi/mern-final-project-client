import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import * as types from './actionTypes';
import usersReducer from './usersReducer';

const appReducer = combineReducers({
   users: usersReducer
});

// console.log(appReducer);

const store = createStore(
   appReducer,
   applyMiddleware(logger)
);

export default store;