const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema(
    {
        title : {type:String, required:true},
        description : String,
        isActive:Boolean 
    }
)

const CourseModel = mongoose.model("courses", courseSchema);
module.exports = CourseModel;