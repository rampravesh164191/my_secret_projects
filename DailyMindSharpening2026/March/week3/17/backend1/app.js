const express = require("express");
const connectToDB = require("./configs/db.config");
const doctorRouter = require("./routers/doctor.router");
const app = express();
const port = 3000;

app.use(express.json()) //body parser middleware

app.get("/test",(req, res)=>{
    res.send("this is a test route")
})

//handle doctor router
app.use("/doctor",doctorRouter);

//handle wrong routes
app.use((req, res)=>{
    res.status(404).send("Route not found");
})

// start server AFTER DB connection
const startServer = async () => {
    await connectToDB();
    app.listen(port, () => {
        console.log(`✅ Server running on port ${port}`);
    });
};

startServer();