const mongoose = require("mongoose");
const patientSchema = new mongoose.Schema(
    {
        name : {type : String, required : true, trim:true, minlength :3},
        age : {type : Number, required : true, min:0},
        gender : {type : String, required:true, enum:["male","female", "other"]},
        isActive : {type:Boolean, default : true}
    }
)

const PatientModel = mongoose.model("patient", patientSchema);
module.exports = PatientModel;