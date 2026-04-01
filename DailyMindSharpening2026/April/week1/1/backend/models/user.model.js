const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name : {type: String, required : true, trim : true, minlength : 2},
        email : {type: String, required : true, unique:true},
        password : {type:String, required:true}
    }
)

const UserModel = mongoose.model("users", userSchema);
module.exports = UserModel;