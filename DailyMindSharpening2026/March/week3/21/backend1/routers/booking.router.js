const express = require("express");
const { addBooking, getBookings } = require("../controllers/booking.controller");
const BookingRouter = express.Router();

//create booking
BookingRouter.post("/:userId/:movieId", addBooking);

//get booking
BookingRouter.get("/", getBookings);

module.exports = BookingRouter;