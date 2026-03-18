const express = require('express');
const { addEnrollment } = require('../controllers/enrollment.controller');
const enrollmentRouter = express.Router();

enrollmentRouter.post("/enroll/:studentId/:courseId", addEnrollment);

module.exports = enrollmentRouter;