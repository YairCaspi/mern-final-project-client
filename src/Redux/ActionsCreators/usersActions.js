import { USERS } from '../actionTypes';


export const requestUsers = () => {
   return {
      type: USERS.FETCH_REQUEST
   };
};
export const receiveUsers = (usersList) => {
   return {
      type: USERS.FETCH_RECEIVE,
      payload: usersList
   }
};

export const selectUser = (user) => {
   return {
      type: USERS.SELECT_USER,
      payload: user
   }
};

export const addNewUserToUsersList = (user) => {
   return {
      type: USERS.ADD_NEW_USER,
      payload: user
   }
}

export const deleteUser = (userId) => {
   return {
      type: USERS.DELETE_USER,
      payload: userId
   }
}

