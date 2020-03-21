import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import * as types from './actionTypes';
import usersReducer from './usersReducer';
import todosReducer from './todosReducer';
import postsReducer from './postsReducer';

const appReducer = combineReducers({
   users: usersReducer,
   todos: todosReducer,
   posts: postsReducer
});

// console.log(appReducer);

const store = createStore(
   appReducer,
   applyMiddleware(logger)
);

export default store;