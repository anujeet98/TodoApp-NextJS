import { Fragment } from "react";
import Todo from '../components/Todo/Todo';
import AddForm from "../components/AddForm/AddForm";
// import { MongoClient } from "mongodb";
import Head from "next/head";
import { Container } from "react-bootstrap";

function HomePage(props){
    return (
        <Fragment>
            <Head>
                <title>Todo</title>
                <meta name="description" content="Create-track your daily todos" />
            </Head>
            <Container fluid className="border bg-light w-75" style={{height: '100vh'}}>
                <span className=" fw-bold fs-5">Today</span>
                <hr></hr>   
                <Todo />
                <hr></hr>
                <AddForm />
            </Container>
        </Fragment>
    )
}


// export async function getStaticProps(){
//     let meetupsData = [];
//     try{
//         const client = await MongoClient.connect(`${process.env.MONGODB_CONN_URL}`);
//         const db = client.db();
//         const meetupsCollection = db.collection('meetups');
//         meetupsData = await meetupsCollection.find().toArray();
//         client.close();
//     }
//     catch(err){
//         console.log(err);
//     }
//     return {
//         props: {
//             meetups: meetupsData.map(meetup => ({
//                 id: meetup._id.toString(),
//                 title: meetup.title,
//                 image: meetup.image,
//                 address: meetup.address,
//                 decription: meetup.description,
//             })),
//         },
//         revalidate: 1,
//     }
// }
export default HomePage;