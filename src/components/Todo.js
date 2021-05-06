import React from 'react';

export default function Todo(props){
    return(
        <div>
            <p onClick={()=> props.toggleComplete(props.todo.id) }>{props.todo.task}</p>
        </div>
    )
}

