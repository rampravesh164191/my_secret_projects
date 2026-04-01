const mongoose = require("mongoose");
const todoSchema = new mongoose.Schema(
    {
        title : {type : String, required : true},
        status : {type: Boolean, default: true},
        userId : {type:mongoose.Schema.Types.ObjectId, ref:"users"}
    }
)

const TodoModel = mongoose.model("todos", todoSchema);
module.exports = TodoModel;