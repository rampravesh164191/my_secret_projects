const express = require("express");
const { addConsultation, getConsultations, getAllPatientsConsultedByDoctor } = require("../controllers/consultation.controller");
const consultationRouter = express.Router();

//get all consultations
consultationRouter.get("/", getConsultations);

//add a consultation
consultationRouter.post("/:doctorId/:patientId",addConsultation);

//list of patient consulted by a doctor
consultationRouter.get("/doctor/:doctorId/patients", getAllPatientsConsultedByDoctor);

module.exports = consultationRouter;