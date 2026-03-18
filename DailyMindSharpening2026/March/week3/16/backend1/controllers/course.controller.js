const courseModel = require("../models/course.model")

const getCourse = async (req, res)=>{
    try{
        const courses = await courseModel.find();
        res.status(200).json({message : "list of courses", courses})
    }catch(error){
        res.status(500).json({message : "error fetching courses", error : error.message})
    }
}

const addCourse = async (req, res)=>{
    try{
        const course = await courseModel.create(req.body);
        res.status(201).json({message : "course added", course})
    }catch(error){
        res.status(500).json({message : "error adding course", error: error.message});
    }
}

module.exports = {addCourse, getCourse}; 