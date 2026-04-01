const TodoModel = require("../models/todo.model")


const addTodo = async (req, res) =>{
    try{
        let todo = await TodoModel.create({...req.body, userId: req.user});
        res.status(201).json({message : "todo added",todo})
    }catch(error){
        res.status(500).json({message : "failed adding todo", error: error.message})
    }
}

const getTodo = async (req, res) =>{
    try{
        let todos = await TodoModel.find();
        res.status(200).json({message : "listed all todos", todos})
    }catch(error){
        res.status(500).json({message : "failed "})
    }
}