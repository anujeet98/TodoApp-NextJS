

import { MongoClient, ObjectId } from "mongodb";


async function TodoHandler(req, res){
    if(req.method==='PATCH'){
        try{
            const {todoId} = req.query;
            const client = await MongoClient.connect(`${process.env.MONGODB_CONN_URL}`);
            const db = client.db();
            const todosCollection = db.collection('todos');
            const result = await todosCollection.updateOne({_id: new ObjectId(todoId)}, {$set: {completed: true}});
            client.close();
            res.status(200).json({result});
        }
        catch(err){
            console.error(err);
            res.status(500).json({message: 'someting went wrong while adding todo'});
        }
    }
    if(req.method==='DELETE'){
        try{
            const {todoId} = req.query;
            const client = await MongoClient.connect(`${process.env.MONGODB_CONN_URL}`);
            const db = client.db();
            const todosCollection = db.collection('todos');
            const result = await todosCollection.deleteOne({_id: new ObjectId(todoId)});
            client.close();
            res.status(200).json({result});
        }
        catch(err){
            console.error(err);
            res.status(500).json({message: 'someting went wrong while adding todo'});
        }
    }
}

export default TodoHandler;