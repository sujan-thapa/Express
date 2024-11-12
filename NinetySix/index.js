// https://www.npmjs.com/package/mongodb
import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

try {
    let conn = await mongoose.connect("mongodb://127.0.0.1:27017/todo");
  } catch (error) {
    console.error("Database connection failed:", error);
  }
const app = express()
const port = 3000

app.get('/', (req, res) => {

    const todo = new Todo({ title: "Sujan ToDo",  desc: "Description of this todo", isDone: false, days: 3 })
    todo.save() 
    res.send('Hello World!')
})

app.get('/a', async (req, res) => { 
    let todo = await Todo.findOne({})
    console.log(todo)
    res.json({title: todo.title, desc: todo.desc})
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})