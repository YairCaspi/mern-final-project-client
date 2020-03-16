import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, IconButton } from '@material-ui/core';
import { Cancel } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
   root: {
     '& > *': {
       margin: theme.spacing(1),
       width: 500,
       display: 'grid',
     },
     display: 'table',
     margin: 'auto'
   },
 }));

export default function AddUser(props) {
   
   const classes = useStyles();

   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [city, setCity] = useState('');
   const [street, setStreet] = useState('');
   const [zipCode, setZipCode] = useState('');

   const handleSubmit = (event) => {
      event.preventDefault();
      props.submitNewUser({
         name,
         email,
         city,
         street,
         zipCode
      }).then(() => {
         props.showAlert('Add User Successfilly', 'success');
         setName('')
         setEmail('')
         setCity('')
         setStreet('')
         setZipCode('')
      })
      .catch(e => {
         props.showAlert('Add User Faild', 'error');
      });
   };

   return (
      <div>
         <IconButton onClick={() => props.history.push('/') }>
            <Cancel/>
         </IconButton>

         <h1>Add User</h1>
         <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField 
               id="name" label="Name" variant="outlined" 
               value={name} onChange={e => setName(e.target.value)} 
            />
            <TextField 
               id="email" label="Email" variant="outlined"
               value={email} onChange={e => setEmail(e.target.value)} 
            />
            <TextField 
               id="city" label="City" variant="outlined" 
               value={city} onChange={e => setCity(e.target.value)} 
            />
            <TextField 
               id="street" label="Street" variant="outlined"
               value={street} onChange={e => setStreet(e.target.value)} 
            />
            <TextField 
               id="zipCode" label="Zip - Code" variant="outlined"
               value={zipCode} onChange={e => setZipCode(e.target.value)} 
            />

            <Button
               color={'primary'}
               variant={'contained'}
               type='submit'>Submit</Button>
         </form>
      </div>
   )
}