const mongoose = require("mongoose");
const connectToDB = async () =>{
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/KhanAcademy");
        console.log("connected to DB");
    }catch(error){
        console.log("error connecting to DB", error);
    }
}
module.exports = connectToDB;