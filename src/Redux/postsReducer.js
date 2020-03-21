import { POSTS } from './actionTypes';

const initialState = {
   posts: [],
   isFetching: false,
};

const todosReducer = (state = initialState, action) => {
   switch (action.type) {
      case POSTS.FETCH_REQUEST: {
         return { ...state, isFetching: true }
      }
      case POSTS.FETCH_RECEIVE: {
         return { 
            ...state,
            isFetching: false,
            posts: action.payload
         }
      }

      default:
         return state;
   }
}

export default todosReducer;