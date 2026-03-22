const BookingModel = require("../models/bookings.model")


const addBooking = async (req,res)=>{
    try{
        const {userId, movieId} = req.params;
        const booking  = await BookingModel.create({userId, movieId});
        res.status(201).json({message : "booking successful", booking})
    }catch(error){
        res.status(500).json({message : "booking failed", error: error.message})
    }
}

//list all bookings
const getBookings = async (req, res)=>{
    try{
        const bookings = await BookingModel.find();
        res.status(200).json({message : "listed all bookings :", bookings})
    }catch(error){
        res.status(500).json({message : "failed listing bookings", error : error.message})
    }
}

module.exports = {addBooking, getBookings}