import React from 'react';

import { Link } from 'react-router-dom';

const UsersListHeader = (props) => {

   return (
      <div className='main-users-header'>
         <input 
            type='text' 
            placeholder='Search'
            onChange={e => props.handleSearch(e.target.value)} 
         />
         <Link to='/add'>Add</Link>
         {/* <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
               <SearchIcon />
            </Grid>
            <Grid item>
               <TextField 
                  label="Search User"
                  onChange={e => props.handleSearch(e.target.value)}
               />
            </Grid>
         </Grid> 
         <Button
            className='add-user-button'
            component={(props) => <Link to='/add' {...props}/>}
         >
            Add
         </Button>*/}
      </div>
   );
}

export default UsersListHeader;