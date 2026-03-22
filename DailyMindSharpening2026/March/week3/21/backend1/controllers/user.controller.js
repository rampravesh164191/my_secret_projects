const UserModel = require("../models/users.model")

//add a user
const addUser = async (req, res)=>{
    try{
        const user = await UserModel.create(req.body);
        res.status(201).json({message : "user added ", user})
    }catch(error){
        res.status(500).json({message : "failed adding user", error: error.message})
    }
}

//show all users
const getUsers = async (req, res)=>{
    try{
        const users = await UserModel.find();
        res.status(200).json({message : "listed all users :", users})
    }catch(error){
        res.status(500).json({message : "error getting all users", error : error.message})
    }
}

module.exports = {addUser, getUsers}