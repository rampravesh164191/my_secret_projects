const express = require("express");
const { addDoctor } = require("../controllers/doctor.controller");
const doctorRouter = express.Router();

//add a doctor
doctorRouter.post("/", addDoctor);


module.exports = doctorRouter;