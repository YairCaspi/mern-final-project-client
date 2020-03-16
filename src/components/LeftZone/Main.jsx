import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import serverApi from '../../services/serverApi';
import { actions as usersActions } from '../../Redux/ActionsCreators/usersActions';

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
         />
      </div>
   );
}

//#region Redux area:

const mapStateToProps = (state) => {
   return {
      isFetching: state.users.isFetching,
      users: state.users.users,
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
   };
 }
 
 //#endregion

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Main);