const courseModel = require("../models/course.model");
const EnrollmentModel = require("../models/enrollment.model");
const StudentModel = require("../models/student.model");


const addEnrollment = async (req, res)=>{
    try{
        const {studentId, courseId} = req.params;
        const student = await StudentModel.findById(studentId);
        const course = await courseModel.findById(courseId);

        if(!student || !student.isActive)return res.status(404).json({message : "student not found"})
        if(!course || !course.isActive) return res.status(404).json({message : "course not found"})
        
        const enrollment = await EnrollmentModel.create({studentId, courseId});
        res.status(201).json({message : "student enrolled", enrollment});
    }catch(error){
        res.status(500).json({message : "failed adding enrollment", error : error.message})
    }
}

module.exports = {addEnrollment} 