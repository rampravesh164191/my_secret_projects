const mongoose = require("mongoose");
const doctorSchema = new mongoose.Schema(
    {
        "name" : {type : String, required : true, trim : true},
        "specialization" : {type : String, required : true, trim : true},
        "isActive" : {type:Boolean, default:true}
    }
)

const DoctorModel = mongoose.model("doctors", doctorSchema)
module.exports = DoctorModel;