const express = require("express");
const { addCourse, getCourse } = require("../controllers/course.controller");
const courseRouter = express.Router();

//get all courses
courseRouter.get("/course", getCourse);

//add course
courseRouter.post("/course", addCourse);

module.exports = courseRouter;