import { TodoModel } from "../models/todo.js";

export const addTodo = async (req, res, next) => {
    // validate user input

try {
        // write todo to database
        await TodoModel.create(req.body);
        // respond to request
        res.status(201).json('Todo was added');
} catch (error) {
    next(error);
}
}

export const getTodos = async (req, res, next) => {
try {
    // fetch todos from database
    const todos = await TodoModel.find();
    // return todos
        res.status(200).json(todos);
} catch (error) {
    next(error);
}
}

export const updateTodo = (req, res, next) =>{
    res.json('Todo updated');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted');
}