import React, { useState } from 'react';
import { RiAddLine } from '@remixicon/react'
import { Button, Form, FormControl } from 'react-bootstrap';

function AddForm() {
    const [showForm, setShowForm] = useState(false);

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
        <Form className='border border-secondary rounded-2 p-2 '>
            <FormControl placeholder='Task name'/>
            <div className='d-flex justify-content-end gap-2 mt-3'>
                <Button onClick={()=>setShowForm(false)} className='bg-secondary-subtle border-0 text-dark'>Cancel</Button>
                <Button className='btn btn-danger '>Add task</Button>
            </div>
        </Form>
    )
}

export default AddForm