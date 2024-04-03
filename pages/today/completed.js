import Head from "next/head";
import { Fragment } from "react";
import { Container } from "react-bootstrap";

const DUMMY=['Gym', 'Lunch'];

function CompletedPage(){
    // const [todos, setTodos] = useState([]);
    // function addTodoHandler(todo){
    //     setTodos((oldTodos)=>([...oldTodos, todo]));
    // }
    // function deleteTodoHandler(todo){
    //     setTodos((oldTodos)=>{
    //         const updatedTodo = [...oldTodos];
    //         return updatedTodo.filter(oldTodo => oldTodo!==todo);    
    //     });
    // }
    return (
        <Fragment>
            <Head>
                <title>Todo</title>
                <meta name="description" content="Create-track your daily todos" />
            </Head>
            <Container fluid className="border bg-light w-75 pt-4" style={{height: '100vh'}}>
                <span className=" fw-bold fs-5">Completed Todos:</span>
                <hr></hr>   
                <ul>
                    {DUMMY.map(todo=>(
                        <li className="list-unstyled border-bottom py-3 px-2 d-flex justify-content-between">{todo}</li>
                    ))}
                </ul>
            </Container>
        </Fragment>
    )
}


export default CompletedPage;