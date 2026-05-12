const mongoose = require("mongoose");
const enrollmentSchema = new mongoose.Schema(
    {
        studentId : {type:mongoose.Schema.Types.ObjectId, ref:"students"},
        courseId : {type:mongoose.Schema.Types.ObjectId, ref:"courses"},
        enrolledAt : {type:Date, default:Date.now},
        isActive:{type:Boolean, default:true}
    }
)
const EnrollmentModel = mongoose.model("enrollment",enrollmentSchema);
module.exports = EnrollmentModel;

