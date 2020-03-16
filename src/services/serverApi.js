import axios from 'axios';

const BASE_URL = 'http://localhost:770/';

export const fetchAllUsers = async () => {
   const response = await axios.get(BASE_URL + 'users');
   return response.data;
}

export const addNewUser = async (user) => {
   const response = await axios.post(BASE_URL + 'users', user);
   console.log(response.data);
   return response.data;
}

export default { 
   fetchAllUsers,
   addNewUser
 };