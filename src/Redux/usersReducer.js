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

      case USERS.DELETE_USER: {
         const usersList = [...state.users];
         const indexToDelete = usersList.findIndex((user) => user._id === action.payload);
         if (indexToDelete === -1) {
            return state;
         } else {
            usersList.splice(indexToDelete, 1);
            return {
               ...state,
               users: usersList
            };
         }
      }

      default:
         return state;
   }
}

export default usersReducer;