const express = require("express");
const connectToDB = require("./configs/db.config");
const vehicleRouter = require("./routes/vehicle.routes");
const app = express();
const port = 3000;

connectToDB();

//body parser middleware
app.use(express.json());

//handle vehicle routes
app.use("/", vehicleRouter);

//test route
app.get("/test", (req, res)=>{
    try{
        res.status(200).json({message:"this is a test route"})
    }catch(error){
        res.status(500).json({message : "test route not working", error : error.message})
    }
})

//handle wrong routes
app.use((req, res)=>{
    res.send("this is a wrong route");
})

//starting a server
app.listen(port, ()=>{
    console.log("app is starting on the port :", port)
})