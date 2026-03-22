const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name : {type:String, required:true, trim:true, minlength:2},
        email : {type:String, required:true, unique:true},
        joinedAt : {type:Date, default:Date.now}
    }
)
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;