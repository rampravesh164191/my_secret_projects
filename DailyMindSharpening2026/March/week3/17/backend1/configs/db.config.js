const mongoose = require("mongoose");
const connectToDB = async ()=>{
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/ShivaClinic");
        console.log("connected to DB");
    }catch(error){
        console.error("❌ DB Connection Error:", error.message);
        process.exit(1); // stop app if DB fails
    }
}

module.exports = connectToDB;