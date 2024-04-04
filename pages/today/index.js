import { Fragment, useState } from "react";
import Todo from '../../components/Todo/Todo';
import AddForm from "../../components/AddForm/AddForm";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Container } from "react-bootstrap";

function HomePage(props){
    return (
        <Fragment>
            <Head>
                <title>Todo</title>
                <meta name="description" content="Create-track your daily todos" />
            </Head>
            <Container fluid className="border bg-light w-75 pt-4" style={{height: '100vh'}}>
                <span className=" fw-bold fs-5">Today</span>
                <hr></hr>   
                <Todo todoList={props.todos} />
                <hr></hr>
                <AddForm />
            </Container>
        </Fragment>
    )
}


export async function getStaticProps(){
    let todos = [];
    try{
        const client = await MongoClient.connect(`${process.env.MONGODB_CONN_URL}`);
        const db = client.db();
        const todosCollection = db.collection('todos');
        todos = await todosCollection.find({completed: false}).toArray();
        client.close();
    }
    catch(err){
        console.log(err);
    }
    return {
        props: {
            todos: todos.map(todo => ({
                id: todo._id.toString(),
                task: todo.task,
                date: new Date(todo.date).toISOString(),
            })),
        },
        revalidate: 1,
    }
}
export default HomePage;