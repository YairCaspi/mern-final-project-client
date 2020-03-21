import { TODOS } from './actionTypes';

const initialState = {
   todos: [],
   isFetching: false,
};

const todosReducer = (state = initialState, action) => {
   switch (action.type) {
      case TODOS.FETCH_REQUEST: {
         return { ...state, isFetching: true }
      }
      case TODOS.FETCH_RECEIVE: {
         return { 
            ...state,
            isFetching: false,
            todos: action.payload
         }
      }

      default:
         return state;
   }
}

export default todosReducer;