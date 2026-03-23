require("dotenv").config();
const express = require("express");
const connectToDB = require("./configs/db.config");
const UserRouter = require("./routers/user.router");
const app = express();
connectToDB();
app.use(express.json()) //body parser middleware
const port = process.env.PORT;

//test route
app.get("/test", (req, res)=>{
    res.status(200).send("this is a test route");
})

//handle user routes
app.use("/users", UserRouter);

//handle wrong routes
app.use((req, res)=>{
    res.status(404).send("This is a wrong route")
})

//starting a server
app.listen(port, ()=>{
    console.log("server is starting on port", port)
})