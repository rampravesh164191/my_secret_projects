const UserModel = require("../models/userModel")

const getUsers = async (req, res) =>{
    try{
        let users = await UserModel.find();
        if(!users){
            res.status(200).json({message : "No users in the list"})
        }else{
            res.status(200).json({message : "Users List :", users})
        }
    }catch(error){
        res.status(500).json({message : "failed fetching users", error : error.message})
    }
}

const addUser = async (req, res) =>{
    try{
        let user = await UserModel.create(req.body);
        res.status(201).json({message : "user added", user})
    }catch(error){
        res.status(500).json({message : "failed adding user", error : error.message})
    }
}

const replaceUser = async (req, res) =>{
    try{
        let {userId} = req.params;
        let user = await UserModel.findById(userId);
        
        if(!user){
            res.status(404).json({message : "user not found"})
        }else{
            await UserModel.replaceOne({_id:userId}, req.body);
            res.status(200).json({message : "replaced user"})
        }
    }catch(error){
        res.status(500).json({message : "failed replacing user", error : error.message})
    }
}

const updateUser = async (req,res) => {
    try{
        let {userId} = req.params;
        let user = await UserModel.findById(userId);
        if(!user){
            res.status(404).json({message : "User not found", error : error.message})
        }else{
            await UserModel.findByIdAndUpdate(userId, req.body);
            res.status(200).json({message : "user updated"})
        }
    }catch(error){
        res.status(500).json({message : "failed updating user", error: error.message})
    }
}

const deleteUser = async (req, res) =>{
    try{
        let {userId} = req.params;
        let user = await UserModel.findById(userId);
        if(!user){
            res.status(404).json({message :  "user not found"})
        }else{
            await UserModel.findByIdAndDelete(userId);
            res.status(300).json({message : "user deleted"})
        }
    }catch(error){
        res.status(500).json({message : "failed deleting user", error : error.message})
    }
}

module.exports = {getUsers, addUser, replaceUser, updateUser, deleteUser};