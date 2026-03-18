const express = require("express");
const { addDoctor, getDoctor } = require("../controllers/doctor.controller");
const doctorRouter = express.Router();

//get list of doctors
doctorRouter.get("/", getDoctor);

//add a doctor
doctorRouter.post("/", addDoctor);


module.exports = doctorRouter;