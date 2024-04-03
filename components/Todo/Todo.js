import React, { useState } from 'react'
import TodoItem from './TodoItem';

function todo() {
    const [todos, setTodos] = useState(['Gym', 'Practice DSA']);
    if(todos.length===0)
        return <div className='d-flex align-items-center justify-content-center '>No todos to display</div>
    return (
        <ul className='border border-secondary rounded-2 p-2'>
            {todos.map(todo=>(
                <TodoItem task={todo}/>
            ))}
        </ul>
    )
}

export default todo