const PatientModel = require("../models/patient.model")

//get all doctors
const getpatient = async(req, res) =>{
    try{
        const patients = await PatientModel.find();
        res.status(200).json({message : "list of all patients", patients});
    }catch(error){
        res.status(500).json({message : "error fetching all patients", error : error.message})
    }
}

//add a patient
const addPatient = async (req, res) =>{
    try{
        const patient = await PatientModel.create(req.body);
        res.status(201).json({message : "Patient added", patient});
    }catch(error){
        res.status(500).json({message : "error adding patient", error:error.message})
    }
}

module.exports = {addPatient, getpatient};