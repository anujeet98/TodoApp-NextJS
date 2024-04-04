import React, { useRef, useState } from 'react';
import { RiAddLine } from '@remixicon/react'
import { Button, Form, FormControl } from 'react-bootstrap';
import { useRouter } from 'next/router';
import axios from 'axios';

async function addTodoHandler(todo){
    try{
        await axios.post('/api/add-todo', todo);
    }
    catch(err){
        throw err;
    }
}


function AddForm() {
    const router = useRouter();
    const [showForm, setShowForm] = useState(false);
    const todoRef = useRef('');

    async function submitFormHandler(e){
        e.preventDefault();
        try{
            await addTodoHandler({task: todoRef.current.value});
            router.push('/today');
            todoRef.current.value='';
        }
        catch(err){
            if(err.response && err.response.data){
                alert(err.response.data.message)
            }
        }
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