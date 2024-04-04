import { MongoClient } from "mongodb";


async function addTodoHandler(req, res){
    if(req.method==='POST'){
        try{
            const {task} = req.body;
            const client = await MongoClient.connect(`${process.env.MONGODB_CONN_URL}`);
            const db = client.db();
            const todosCollection = db.collection('todos');
            const result = await todosCollection.insertOne({task: task, date: new Date()});
            client.close();
            res.status(200).json({result});
        }
        catch(err){
            console.error(err);
            res.status(500).json({message: 'someting went wrong while adding todo'});
        }
    }
}

export default addTodoHandler;