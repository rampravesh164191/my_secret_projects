let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
const UserModel = require("../models/user.model");
const saltRounds = 10;


const signup = async (req, res) =>{
    try{
        const {name, email, password} = req.body;
        const hash = await bcrypt.hash(password, saltRounds);
        const user = await UserModel.create({name, email, password:hash});
        res.status(201).json({message : "user added", user})
    }catch(error){
        res.status(500).json({message : "failed adding user", error: error.message})
    }
}

const login = async (req, res)=>{
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        if(!user) {
            return res.status(404).json({message : "user not found"})
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            res.status(401).json({message : "wrong password"})
        }
        const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET_KEY);
        res.status(200).json({message : "Login successful", token});
    }catch(error){
        res.status(500).json({message:"couldn't login", error : error.message})
    }
}

const getUsers = async (req, res)=>{
    try{
        const users = await UserModel.find();
        res.status(200).json({message : "list of users", users})
    }catch(error){
        res.status(500).json({message : "failed fetching users", error: error.message})
    }
}

module.exports = {signup, login, getUsers}  