import { Schema, model } from "mongoose";
const todoSchema = new Schema({
    title : {type: String, required: true},
    completed : {type: Boolean}
});


export const TodoModel = model('Todo', todoSchema);