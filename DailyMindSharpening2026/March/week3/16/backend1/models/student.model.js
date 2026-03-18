const mongoose = require("mongoose");
const studentSchema = mongoose.Schema(
    {
        name : {type:String, required:true},
        email : {type:String, unique:true, required:true},
        isActive : {type:Boolean, default:true}
    }
)

const StudentModel = mongoose.model("student",studentSchema);
module.exports = StudentModel;