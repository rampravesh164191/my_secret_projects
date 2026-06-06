import { Request, Response } from "express";
import User from "./user.model";
import { generateTokens } from "./user.service";

//get all users
export const getUsers = async (req:Request, res: Response)=>{
  try{
    const users = await User.find();
    res.json(users);
  }catch(error){
    res.status(500).json({error:"Failed to fetch users"}) 
  }
};

//register uesr
export const registerUser = async (req: Request, res: Response) =>{
  try{
    const {name, email, password, role} = req.body;
    const user = await User.create({name, email, password, role});
    res.status(201).json({message: "user registered successfully"})
  }catch(error){
    res.status(400).json({error: "failed to register user", details: error})
  }
}

//login user
export const loginUser = async (req:Request, res:Response)=>{
  try{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if(!user) return res.status(401).json({error: "Invalid credentials"});
    const isMatch = await user.comparePassword(password);
    if(!isMatch) return res.status(401).json({error: "Invalid credentials"})
    const tokens = generateTokens(user);
    res.json({message: "Login successful", ...tokens})
  }catch(error){
    res.status(500).json({error: "Login failed"})
  }
}