const mongoose = require("mongoose");
const enrollmentSchema = mongoose.Schema(
    {
        studentId : {type:mongoose.Schema.Types.ObjectId, ref:"student"},
        courseId : {type:mongoose.Schema.Types.ObjectId, ref:"course"},
        enrolledAt : {type:Date, default:Date.now},
        isActive: {type:Boolean, default:true}
    }
)
const EnrollmentModel = mongoose.model("enrollment", enrollmentSchema);
module.exports = EnrollmentModel;