import React, { useState } from 'react';
import { RiDeleteBinLine, RiCheckboxBlankCircleLine, RiCheckboxCircleFill } from '@remixicon/react'
import { useRouter } from 'next/router';
import axios from 'axios';

function TodoItem(props) {
    const [fillCheckBox, setFillCheckBox] = useState(false);
    const router = useRouter();
    async function completeTodoHandler(){
        try{
            await axios.patch(`/api/update-todo/${props.todo.id}`);
            router.push('/today');
        }
        catch(err){
            if(err.response && err.response.data){
                alert(err.response.data.message)
            }
        }
    }
    return (
        <li className='list-unstyled border-bottom py-3 px-2 d-flex justify-content-between '>
            <div className='d-flex align-items-center gap-2'>
                {fillCheckBox ? 
                    <RiCheckboxCircleFill color='grey' type='button' onMouseLeave={()=>setFillCheckBox(false)}/> : 
                    <RiCheckboxBlankCircleLine type='button' onMouseEnter={()=>setFillCheckBox(true)} onClick={completeTodoHandler}/> }
                {props.todo.task}
            </div>
            <RiDeleteBinLine color='maroon' type='button' onClick={()=>props.onDeleteTodo(props.todo.id)}/>
        </li>
    )
}

export default TodoItem