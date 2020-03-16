import { USERS } from './actionTypes';

const initialState = {
   users: [],
   isFetching: false,
   updatingUserId: null,
   selectedUser: null
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case USERS.FETCH_USERS_REQUEST: {
         return { ...state, isFetching: true }
      }
      case USERS.FETCH_USERS_RECEIVE: {
         return { 
            ...state,
            isFetching: false,
            users: action.payload
         }
      }

      case USERS.ADD_NEW_USER: {
         return {
            ...state,
            users: [...state.users, action.payload]
         };
      }
      default:
         return state;
   }
}

export default usersReducer;