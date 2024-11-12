import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    // title: {type: String, required: true, default: "Sujan ToDo"},
    title: String,
    desc: String,
    isDone: Boolean,
    days: Number
});

export const Todo = mongoose.model('Todo', TodoSchema);