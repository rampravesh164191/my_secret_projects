const express = require("express");
const { addPatient, getpatient } = require("../controllers/patient.controller");
const patientRouter = express.Router();

//get all patients
patientRouter.get("/", getpatient);

//add a patient
patientRouter.post("/", addPatient);

module.exports = patientRouter;