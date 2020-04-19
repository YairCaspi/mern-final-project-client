import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

import * as serverApi from '../../services/serverApi';
import * as actionsUsers from '../../Redux/ActionsCreators/usersActions';
import * as actionsTodos from '../../Redux/ActionsCreators/todosActions';
import * as actionsPosts from '../../Redux/ActionsCreators/postsActions';

function UserItems(props) {

  const selectedUserId = props.match.params.objectId;

  //let [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    //setSelectedUserId(props.match.params.objectId);
    if (selectedUserId != null) {
      props.selectUser(selectedUserId);
      props.loadUserItems(selectedUserId);
      debugger;
    }
  }, [selectedUserId]);


  const renderTodos = (todos) => {
    return todos.map((todo) => <Todo title={todo.title} completed={todo.completed} />)
  }

  return (
    <div>
      {renderTodos(props.todos)}
    </div>
  );
}


const mapStateFoProps = (state) => {
  return {
    todos: state.todos.todos,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    selectUser: (userId) => {
      dispatch(actionsUsers.selectUser(userId));
   },

   loadUserItems: (userId) => {
      serverApi.getUserTodos(userId).then(data => {
         dispatch(actionsTodos.receiveTodos(data));
      });
      serverApi.getUserPosts(userId).then(data => {
         dispatch(actionsPosts.receivePosts(data));
      });
   }
  }
}

export default connect(
  mapStateFoProps,
  mapDispatchToProps
)(UserItems);