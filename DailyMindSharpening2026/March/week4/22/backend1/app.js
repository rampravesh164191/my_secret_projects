require("dotenv").config();
const express = require("express");
const connectToDB = require("./configs/db.config");
const UserRouter = require("./routers/user.router");
const app = express();
connectToDB(); 
app.use(express.json()) //body parser middleware
const port = 3000;


//handle user Router
app.use("/users", UserRouter);

//testing route
app.get("/test", (req, res)=>{
    res.send("this is a test route");
})

//hadle wrong routes
app.use((req, res)=>{
    res.status(404).send("this is a wrong route")
})

//start a server
app.listen(port, ()=>{
    console.log("server stating on port", port);
})