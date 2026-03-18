const mongoose = require('mongoose');
const consultationSchema = new mongoose.Schema(
    {
        doctorId : {type:mongoose.Schema.Types.ObjectId, ref : "doctor"},
        patientId : {type:mongoose.Schema.Types.ObjectId, ref : "patient"},
        consultedAt : {type:Date, default : Date.now},
        notes : String,
        isActive: {type:Boolean, default:true}
    }
)

const ConsultationModel = mongoose.model("consultation", consultationSchema);
module.exports = ConsultationModel;