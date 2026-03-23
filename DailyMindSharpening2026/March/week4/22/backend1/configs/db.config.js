const mongoose = require("mongoose");
const connectToDB = async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/authPractice")
        console.log("connected to DB");
    }catch(error){
        console.log("error connecting to db", error);
    }
}

module.exports = connectToDB;