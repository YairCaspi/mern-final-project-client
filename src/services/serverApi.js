import axios from 'axios';

const BASE_URL = 'http://localhost:770';

export const fetchAllUsers = async () => {
   const response = await axios.get(BASE_URL + '/users');
   return response.data;
}

export const addNewUser = async (user) => {
   const response = await axios.post(BASE_URL + '/users', user);
   return response.data;
}

export const deleteUser = async (userId) => {
   const response = await axios.delete(`${BASE_URL}/users/${userId}`);
   return response.data;
}

export const getUserTodos = async (userId) => {
   const response = await axios.get(`${BASE_URL}/todos/${userId}`);
   return response.data;
}

export const getUserPosts = async (userId) => {
   const response = await axios.get(`${BASE_URL}/posts/${userId}`);
   return response.data;
}
