const mongoose = require("mongoose");
const connectToDB = async () =>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/Vehicle");
        console.log("connected to DB");
    }catch(error){
        console.log("failed connecting to DB", error)
    }
}
module.exports = connectToDB;