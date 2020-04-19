import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as serverApi from '../../services/serverApi';
import * as usersActions from '../../Redux/ActionsCreators/usersActions';

import UsersListHeader from './UsersListHeader';
import UsersList from './UsersList';

import './style.css';

function Main(props) {

   const [searchInput, setSearchInput] = useState('');

   useEffect(() => {
      props.loadUsers();
   }, []);

   let usersList;
   if (searchInput === '') {
      usersList = props.users;
   } else {
      usersList = props.users.filter((user) => {
         return user.name.toLowerCase().includes(searchInput.toLowerCase()) || user.email.toLowerCase().includes(searchInput.toLowerCase());
      });
   }

   return (
      <div className='main-left-zone'>
         <UsersListHeader
            handleSearch={setSearchInput}
         />

         <UsersList
            isFetching={props.isFetching}
            users={usersList}
            deleteUser={props.deleteUser}
            selectedUserId={props.selectedUserId}
         />
      </div>
   );
}

//#region Redux area:

const mapStateToProps = (state) => {
   const {
      isFetching,
      users,
      selectedUserId
   } = state.users
   return {
      isFetching,
      users,
      selectedUserId
   };
 }
 
 const mapDispatchToProps = (dispatch, props) => {
   return {
     loadUsers: () => {
       dispatch(usersActions.requestUsers());
       serverApi.fetchAllUsers().then(usersData => {
         dispatch(usersActions.receiveUsers(usersData));
       });
     },

     deleteUser: (userId) => {
        serverApi.deleteUser(userId).then(() => {
           dispatch(usersActions.deleteUser(userId));
        });
     }
   };
 }
 
 //#endregion

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Main);