const DoctorModel = require("../models/doctor.model")

const addDoctor = async (req, res) =>{
    try{
        const doctor = await DoctorModel.create(req.body);
        res.status(201).json({message : "new doctor appointed", doctor})
    }catch(error){
        res.status(500).json({message : "error adding doctor", error : error.message});
    }
}


module.exports = {addDoctor};