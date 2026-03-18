const ConsultationModel = require("../models/consultation.model");
const DoctorModel = require("../models/doctor.model");
const PatientModel = require("../models/patient.model");

//list all consultations
const getConsultations = async (req, res) =>{
    try{
        const consultations = await ConsultationModel.find();
        res.status(200).json({message : "list of all consultations", consultations})
    }catch(error){
        res.status(500).json({message : "error fetching consultation", error : error.message})
    }
}


//add a consultation
const addConsultation = async (req, res) =>{
    try{
        const {doctorId, patientId} = req.params;
        const doctor = await DoctorModel.findById(doctorId);
        const patient = await PatientModel.findById(patientId);

        if(!doctor || !doctor.isActive) return res.status(404).send("doctor not found");
        if(!patient || !patient.isActive) return res.status(404).send("patient not found");

        const consultation = await ConsultationModel.create({doctorId, patientId});
        res.status(201).json({message : "consultation added", consultation})
    }catch(error){
        res.status(500).json({message : "error adding consultation", error : error.message});
    }
}

module.exports = {addConsultation, getConsultations};