import mongoose from "mongoose";
import { env } from "../utils/env";

const connectDB = async () =>{
  try{
    const conn = await mongoose.connect(env.MONGODB_URI);
    console.log(`MongoDB Connected ${conn.connection.host}`)
  }catch(error){
    console.error("Error connecting MongoDB ", error)
  }
}
export default connectDB;