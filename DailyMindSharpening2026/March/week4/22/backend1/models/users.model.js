const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name : {type:String, trim:true, minlength:2, required:true},
        email : {type:String, unique:true},
        password :{type:String, required:true}
    }
)
const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;