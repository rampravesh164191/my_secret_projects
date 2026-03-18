const express = require("express");
const { addStudent, getStudents } = require("../controllers/student.controller");
const studentRouter = express.Router();


studentRouter.get("/student", getStudents);
studentRouter.post("/student", addStudent);

module.exports = studentRouter;