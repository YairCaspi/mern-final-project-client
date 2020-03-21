import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import * as serverApi from '../../services/serverApi';
import { actions } from '../../Redux/ActionsCreators/usersActions';
import * as actionsTodos from '../../Redux/ActionsCreators/todosActions';

import AddUser from './AddUser';
import UserItems from './UserItems';

import './style.css';

function Main(props) {

   const initialAlertState = {
      open: false,
      message: '',
      severity: '',
   }
   const [alertState, setAlertState] = useState(initialAlertState);

   const showAlert = (message, severity= 'success') => {
      setAlertState({
         open: true,
         message,
         severity
      });
   };

   const handleCloseAlert = (event, reason) => {
      if (reason !== 'clickaway') {
         setAlertState(initialAlertState);
      }
   };

   return(
      <div className='main-right-zone'>
         <Switch>
            <Route path='/add' component={(innerProps) => 
               <AddUser 
                  submitNewUser={props.submitNewUser}
                  showAlert={showAlert}
                  {...innerProps} />
            }/>

            <Route path='/user/:objectId' component={(innerProps) =>
               <UserItems
                  loadTodos={props.loadTodos}
                  {...innerProps}
               />
            } />

         </Switch>

         <Snackbar 
            open={alertState.open} 
            autoHideDuration={6000}
            anchorOrigin={{ 
               vertical: 'top', 
               horizontal: 'center'
            }}
            onClose={handleCloseAlert}
         >
            <Alert 
               severity="success"
               variant="filled"
               elevation={6}
               onClose={handleCloseAlert}
            >
               {alertState.message}
            </Alert>
         </Snackbar>
      </div>
   )
}

//#region Redux zone:

const mapStateToProps = (state, props) => {
   return {...props};
}

const mapDispatchToProps = (dispatch, props) => {
   return {
      submitNewUser: (user) => {
         return new Promise((resolve, reject) => {
            serverApi.addNewUser(user).then(data => {
               console.log(data);
               if (data._id) {
                  dispatch(actions.addNewUserToUsersList(data));
                  resolve();
               } else {
                  reject(data);
               }
            })
         });
      },

      loadTodos: (userId) => {
         serverApi.getUserTodos(userId).then(data => {
            dispatch(actionsTodos.receiveTodos(data));
         });
      }
   };
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Main);
//#endregion