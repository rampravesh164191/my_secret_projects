const StudentModel = require("../models/student.model")


//fetch all students
const getStudents = async (req, res)=>{
    try{
        const students = await StudentModel.find();
        res.status(200).json({message : "list of students", students})
    }catch(error){
        res.status(500).json({message :  "error fetching students"})
    }
}

const addStudent = async (req, res)=>{
    try{
        const student = await StudentModel.create(req.body);
        res.status(201).json({message : "new student added", student})
    }catch(error){
        res.status(500).json({message : "error adding student", error:error.message})
    }
}

module.exports = {addStudent, getStudents}