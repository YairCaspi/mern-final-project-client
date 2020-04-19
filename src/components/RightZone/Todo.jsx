import React from 'react';

export default function Todo(props) {

   return (
      <div>
         <p>{props.title}</p>
         <input type="button" value={`Set as ${props.completed ? 'not ' : ''}complete`}/>
      </div>
   )
}