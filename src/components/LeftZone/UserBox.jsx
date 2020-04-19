import React, { useState } from 'react';

import history from '../../services/history';

import { validate } from 'email-validator';

const UserBox = (props) => {

   const [name, setName] = useState(props.user.name);
   const [email, setEmail] = useState(props.user.email);
   const [emailErr, setEmailErr] = useState('');

   const handleChangeName = (event) => {
      setName(event.target.value);
   }
   const handleChangeEmail = (event) => {
      const emailVal = event.target.value
      setEmail(emailVal);
      if (validate(emailVal)) {
         setEmailErr('')
      } else {
         setEmailErr('Not Valid Email');
      }
   }

   const handleSelectUser = () => {
      history.push('/user/' + props.user._id);
   }

   const saveChanges = () => {
      console.log(name, email);
   }

   const onDeleteClick = () => {
      props.handleDelete(props.user._id);
   }

   let divClass = 'item-user-box';
   
   if (props.user.uncompletedTodosCount > 0) {
      divClass += ' red';
   } else {
      divClass += ' green';
   }
   if (props.selected) {
      divClass += ' selected';
   }
   return (
         <div className={divClass} onClick={handleSelectUser}>
            <form noValidate autoComplete="off">
               <div>
                  <label >Name:</label><input name='name' value={name} onChange={handleChangeName} /><br/>
                  <label >Email:</label><input name='email' value={email} onChange={handleChangeEmail} />
               </div>
               
               <div className='user-actions'>
                  <input type='button' value='Details' />
                  <div className='actions-save-delete'>
                     <input type='button' value='Save' />
                     <input type='button' value='Delete' onClick={onDeleteClick}/>
                  </div>
               </div>
            </form>
         </div>
   )
}

export default UserBox;