import express from 'express'; 
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';

// connect to database
await mongoose.connect('mongodb+srv://todo-api:todo-api@cluster0.bimzh.mongodb.net/todo-db?retryWrites=true&w=majority&appName=Cluster0');


// create an express app
const app = express();

// use routes
app.use(todoRouter, userRouter);

// listen for incoming requests
app.listen(3000, () => {
    console.log('App is listening on port 3000')
});                                                                