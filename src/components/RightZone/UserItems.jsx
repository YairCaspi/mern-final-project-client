import React, { useEffect } from 'react';

export default function UserItems(props) {

  const selectedUserId = props.match.params.objectId;

  useEffect(() => {
    props.loadTodos(selectedUserId);
  }, [selectedUserId])

  return (
    <div>
      TODOS
    </div>
  );
}
