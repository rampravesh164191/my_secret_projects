const express = require("express");
const connectToDB = require("./configs/db.config");
const studentRouter = require("./routes/student.routes");
const courseRouter = require("./routes/course.routes");
const enrollmentRouter = require("./routes/enrollment.routes");
const app = express();
const port = 3000;

//connect to DB
connectToDB();

//body parser middleware
app.use(express.json());

//handle student router
app.use("/", studentRouter)

//handle course router
app.use("/", courseRouter);

//handling enrollment routes
app.use("/", enrollmentRouter);

//test route
app.get("/test", (req, res)=>{
    res.send("this is a test route")
})

//handle wrong routes
app.use((req, res)=>{
    res.send("this is a wrong route")
})

//starting a server
app.listen(port,()=>{
    console.log("server starting on port : ", port)
})