import React, { useState } from 'react';
import { RiDeleteBinLine, RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from '@remixicon/react'

function TodoItem(props) {
    const [fillCheckBox, setFillCheckBox] = useState(false);
    return (
        <li className='list-unstyled border-bottom py-3 px-2 d-flex justify-content-between '>
            <div className='d-flex align-items-center gap-2'>
                {fillCheckBox ? 
                    <RiCheckboxCircleFill color='grey' type='button' onMouseLeave={()=>setFillCheckBox(false)}/> : 
                    <RiCheckboxBlankCircleLine type='button' onMouseEnter={()=>setFillCheckBox(true)} onClick={()=>props.onComplete(props.todo.id)}/> }
                {props.todo.task}
            </div>
            <RiDeleteBinLine color='maroon' type='button' onClick={()=>props.onDeleteTodo(props.todo.id)}/>
        </li>
    )
}

export default TodoItem