const mongoose = require('mongoose');
const courseSchema = mongoose.Schema(
    {
        title : {type:String, required:true},
        description: String,
        isActive: {type:Boolean, default:true}
    }
)
const courseModel = mongoose.model("course", courseSchema);
module.exports = courseModel;