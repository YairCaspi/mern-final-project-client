import React from 'react';

import CircularProgress from '@material-ui/core/CircularProgress';

import UserBox from './UserBox';

export default function UsersList(props) {

   let usersList;
   if (props.isFetching) {
      usersList = 
      <div style={{backgroundColor: '#2f4f4f30', height: '100vh'}}>
         <CircularProgress style={{display: 'block', position: 'relative', margin: 'auto', top: '45%'}} />
      </div>;
   } else {
      usersList = props.users.map(user => 
         <UserBox 
            key={user._id} 
            user={user}
            handleDelete={props.deleteUser}
         />
      );
   }

   return (
      <div className='main-users-list'>
        { usersList }
      </div>
   );
}