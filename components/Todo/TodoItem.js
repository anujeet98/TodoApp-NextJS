import React from 'react';
import { RiDeleteBinLine, RiCheckboxBlankCircleLine } from '@remixicon/react'

function TodoItem(props) {
    return (
        <li className='list-unstyled border-bottom py-2 px-2 d-flex justify-content-between '>
            <div className='d-flex align-items-center gap-2'>
                <RiCheckboxBlankCircleLine className='' />{props.task}
            </div>
            <RiDeleteBinLine color='maroon'/>
        </li>
    )
}

export default TodoItem