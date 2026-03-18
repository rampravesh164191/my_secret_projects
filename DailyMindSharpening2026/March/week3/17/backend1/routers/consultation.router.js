const express = require("express");
const { addConsultation, getConsultations } = require("../controllers/consultation.controller");
const consultationRouter = express.Router();

//get all consultations
consultationRouter.get("/", getConsultations);

//add a consultation
consultationRouter.post("/:doctorId/:patientId",addConsultation);

module.exports = consultationRouter;