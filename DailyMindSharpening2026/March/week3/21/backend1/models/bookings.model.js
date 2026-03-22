const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema(
    {
        userId : {type: mongoose.Types.ObjectId, ref:"users"},
        movieId : {type: mongoose.Types.ObjectId, ref:"movies"},
        bookingDate:Date,
        seats:Number,
        status:{type:String, enum : ["Booked", "Available"], default:"Available"}
    }
)
const BookingModel = mongoose.model("bookings", bookingSchema);
module.exports = BookingModel;