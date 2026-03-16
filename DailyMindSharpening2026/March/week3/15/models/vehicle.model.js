const mongoose = require("mongoose");
const vehicleSchema = mongoose.Schema(
    {
        registrationNumber : {type : String, require:true, unique:true},
        type : {type:String, enum:["car", "truck", "bike"], required : true},
        model : {type : String, require: true},
        isActive : {type : Boolean, default:true},
        trips: [
            {
                startLocation : {type:String, required:true},
                endLocation : {type:String, required:true},
                distance : {type:Number, trquired:true, min:1},
                startTime : {type : Date, default:Date.now},
                endTime : {type:Date, default:Date.now}
            }
        ]
    }
)

const VehicleModel = mongoose.model("v1", vehicleSchema);
module.exports = VehicleModel;