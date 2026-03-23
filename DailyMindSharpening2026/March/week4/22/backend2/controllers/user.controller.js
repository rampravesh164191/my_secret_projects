const bcrypt = require("bcrypt");
const userModel = require("../module/user.model");
const jwt = require("jsonwebtoken")
const saltRounds = 10;


const signup = async (req, res)=>{
    try{
        const {name, email, password} = req.body;
        const hash = await bcrypt.hash(password, saltRounds);
        const user = await userModel.create({name, email, password:hash});
        res.status(201).json({message : "user added", user});
    }catch(error){
        res.status(500).json({message : "failed adding user", error : error.message})
    }
}
 

const login = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).json({message : "user not found"});
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(401).json({message : "wrong password"})
        }
        const token = jwt.sign({userId:user._id},process.env.JWT_SECRET_KEY);
        res.status(200).json({message :  "Login successful", token});
    }catch(error){
        res.status(500).json({message : "Couldn't login", error : error.message})
    }
}

//get user
const getUser = async (req,res)=>{
    try{
        const users = await userModel.find();
        res.status(200).json({message : "all users list : ", users})
    }catch(error){
        res.status(500).json({message : "error fetching users", error: error.message})
    }
}

module.exports = {signup, login, getUser}