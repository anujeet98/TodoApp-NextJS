import React from 'react'
import TodoItem from './TodoItem';

function todo(props) {
    if(props.todoList.length===0)
        return <div className='d-flex align-items-center justify-content-center '>No todos to display</div>
    return (
        <ul className='p-2'>
            {props.todoList.map(todo=>(
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default todo