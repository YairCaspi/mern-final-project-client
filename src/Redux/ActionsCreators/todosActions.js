import { TODOS } from '../actionTypes';

export const requestTodos = () => {
   return {
      type: TODOS.FETCH_REQUEST
   };
};

export const receiveTodos = (todosList) => {
   return {
      type: TODOS.FETCH_RECEIVE,
      payload: todosList
   }
};
