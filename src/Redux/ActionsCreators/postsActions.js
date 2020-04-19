import { POSTS } from '../actionTypes';

export const requestPosts = () => {
   return {
      type: POSTS.FETCH_REQUEST
   };
};

export const receivePosts = (todosList) => {
   return {
      type: POSTS.FETCH_RECEIVE,
      payload: todosList
   }
};
