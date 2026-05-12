const StudentModel = require("../models/student.model");

const getStudents = async (req, res) =>{
    try{
        const students = await StudentModel.find();
        if(!students){
            res.status(404).json({message : "student list is empty"})
        }else{
            res.status(200).json({message: "Students List :", students})
        }
    }catch(error){
        res.status(500).json({message : "error fetching students"})
    }
}

const addStudent = async (req, res) =>{
    try{
        const student = await StudentModel.create(req.body);
        res.status(201).json({message : "new student added", student})
    }catch(error){
        res.status(500).json({message : "error adding student"})
    }
}

const replaceStudent = async (req, res) =>{
    try{
        const {studentId} = req.params;
        const student = await StudentModel.findById(studentId);
        if(!student){
            res.status(404).json({message : "student not found"})
        }else{
            await UserModel.replaceOne({_id:studentId},req.body);
        }
    }catch(error){
        res.status(500).json({message : "error replacing student", error:error.message})
    }
}

const updateStudent = async (req, res) =>{
    try{
        const {studentId} = req.params;
        const student = await StudentModel.findById(studentId);
        if(!student){
            res.status(404).json({message : "student not found"})
        }else{
            await StudentModel.findByIdAndUpdate(studentId, req.body);
        }
    }catch(error){
        res.status(500).json({message : "error updating student"})
    }
}

const deleteStudent = async (req, res) =>{
    try{
        const {studentId} = req.params;
        const student = await StudentModel.findById(studentId);
        if(!student){
            res.status(404).json({message : "student not found"})
        }else{
            await StudentModel.findByIdAndDelete(studentId);
            res.status(200).json({message : "student deleted"})
        }
    }
}