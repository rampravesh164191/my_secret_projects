const UserModel = require("../models/users.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const saltRounds = 10;

const addUser = async (req, res)=>{
    try{
        const {name, email, password} = req.body;
        const hash = await bcrypt.hash(password, saltRounds);
        const user = await UserModel.create({ name, email, password: hash });
        res.status(201).json({ message: "user added", user });
    }catch(error){
        res.status(500).json({message : "failed adding user", error:error.message})
    }
}

const getUser = async (req, res) =>{
    try{
        const users = await UserModel.find();
        res.status(200).json({message : "all users listed :", users})
    }catch(error){
        res.status(500).json({message : "failed fetching users", error : error.message})
    }
}

//login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: "Wrong password" });
        }
        const token = jwt.sign({ userId: user._id },process.env.JWT_SECRET_KEY);
        res.status(200).json({message: "Login successful",token});

    } catch (error) {
        res.status(500).json({message: "Couldn't login",error: error.message});
    }
};

module.exports = {addUser, getUser, login}