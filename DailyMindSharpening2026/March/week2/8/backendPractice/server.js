const express = require("express");
const app = express();
const port = 3000;

//body parser middleware
app.use(express.json());

//testing route
app.get("/test", (req, res)=>{
    res.send("this is a test route")
})

//starting a port
app.listen(port,()=>{
    console.log("app is starting on port", port);
})