const DoctorModel = require("../models/doctor.model")

//get all doctor details
const getDoctor = async (req, res) =>{
    try{
        const doctors = await DoctorModel.find();
        res.status(200).json({message : "list all doctors", doctors})
    }catch(error){
        res.status(500).json({message : "error fetching doctors", error : error.message});
    }
}

//add a doctor
const addDoctor = async (req, res) =>{
    try{
        const doctor = await DoctorModel.create(req.body);
        res.status(201).json({message : "new doctor appointed", doctor})
    }catch(error){
        res.status(500).json({message : "error adding doctor", error : error.message});
    }
}


module.exports = {addDoctor, getDoctor};