import React, { useRef, useState } from 'react';
import { RiAddLine } from '@remixicon/react'
import { Button, Form, FormControl } from 'react-bootstrap';

function AddForm(props) {
    const [showForm, setShowForm] = useState(false);
    const todoRef = useRef('');

    function submitFormHandler(e){
        e.preventDefault();
        props.onNewTodo({task: todoRef.current.value});
        todoRef.current.value='';
    }

    if(!showForm){
        return (
            <div>
                <Button onClick={()=>setShowForm(true)} className='bg-transparent text-dark border-0 d-flex align-items-center p-0 fw-bold '>
                    <RiAddLine color='red'  />Add task
                </Button>
            </div>
        )
    }
    return (
        <Form className='border border-secondary rounded-2 p-3 ' onSubmit={(e)=>submitFormHandler(e)}>
            <FormControl ref={todoRef} placeholder='Task name'/>
            <div className='d-flex justify-content-end gap-2 mt-3'>
                <Button onClick={()=>setShowForm(false)} className='bg-secondary-subtle border-0 text-dark'>Cancel</Button>
                <Button type='submit' className='btn btn-danger '>Add task</Button>
            </div>
        </Form>
    )
}

export default AddForm