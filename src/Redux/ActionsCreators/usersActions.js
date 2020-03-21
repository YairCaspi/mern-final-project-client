import { USERS } from '../actionTypes';

export const actions = {
   requestUsers: () => {
      return {
         type: USERS.FETCH_USERS_REQUEST
      };
   },
   receiveUsers: (usersList) => {
      return {
         type: USERS.FETCH_USERS_RECEIVE,
         payload: usersList
      }
   },

   addNewUserToUsersList: (user) => {
      return {
         type: USERS.ADD_NEW_USER,
         payload: user
      }
   },

   deleteUser: (userId) => {
      return {
         type: USERS.DELETE_USER,
         payload: userId
      }
   }
}
