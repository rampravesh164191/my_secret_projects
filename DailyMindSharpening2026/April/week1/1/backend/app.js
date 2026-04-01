require("dotenv").config();
const express = require("express");
const connectToDB = require("./config/db");
const UserRouter = require("./routes/user.router");
const app = express();
connectToDB();
app.use(express.json()); //body parser middleware
const port = process.env.PORT

//handle user routes
app.use("/", UserRouter);

//handle wrong routes
app.use((req, res)=>{
    res.send({message : "wrong route"})
})

//start server
app.listen(port, ()=>{
    console.log("server starting on port :", port)
})