const mongoose = require("mongoose");
const connectToDB = async () =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/KhanAcademy");
        console.log("connected to db");
    }catch(error){
        console.log("error connecting to DB")
    }
}

module.exports = connectToDB