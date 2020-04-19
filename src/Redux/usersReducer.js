import { USERS } from './actionTypes';

const initialState = {
   users: [],
   isFetching: false,
   updatingUserId: null,
   selectedUserId: ''
};

const usersReducer = (state = initialState, action) => {
   switch (action.type) {
      case USERS.FETCH_REQUEST: {
         return { ...state, isFetching: true }
      }
      case USERS.FETCH_RECEIVE: {
         return { 
            ...state,
            isFetching: false,
            users: action.payload
         }
      }

      case USERS.SELECT_USER: {
         return {
            ...state,
            selectedUserId: action.payload
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