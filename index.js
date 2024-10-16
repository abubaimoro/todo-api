import express from 'express'; 
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';
import cors from 'cors';

// connect to database
await mongoose.connect(process.env.MONGO_URI);

// create an express app
const app = express();

// use middlewares
app.use(express.json()); 
app.use(cors());
// use routes
app.use(todoRouter);
app.use(userRouter);

// listen for incoming requests
app.listen(3000, () => {
    console.log('App is listening on port 3000')
});                                                                