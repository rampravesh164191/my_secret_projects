const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema(
    {
        name: {type:String, required:true, minlen : 3, trim:true},
        email : {type:String},
        isActive : {type : Boolean}
    }
)
const StudentModel = mongoose.model("students", studentSchema);
module.exports = StudentModel;