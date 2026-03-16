const express = require("express");
const { addVehicle, getVehicle, updateVehicle, deleteVehicle, addTrip, updateTrip } = require("../controllers/vehicle.controllers");
const vehicleRouter = express.Router();

//get all vehicle
vehicleRouter.get("/vehicle", getVehicle)

//add vehicle
vehicleRouter.post("/vehicle", addVehicle)

//update vehicle
vehicleRouter.patch("/vehicle/:id", updateVehicle)

//delete vehicle
vehicleRouter.delete("/vehicle/:id", deleteVehicle);

// ---------- Trip Operations ---------
vehicleRouter.post("/vehicle/:id/trips", addTrip)

//updated trip
vehicleRouter.patch("/vehicle/:id/trips/:tripId", updateTrip)

module.exports = vehicleRouter;