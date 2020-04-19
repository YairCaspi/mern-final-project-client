import React, { useState, useEffect } from 'react';

import Todo from './Todo';

export default function UserItems(props) {

  // const selectedUserId = props.match.params.objectId;

  let [selectedUserId, setSelectedUserId] = useState(null);

  useEffect(() => {
    setSelectedUserId(props.match.params.objectId);
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
