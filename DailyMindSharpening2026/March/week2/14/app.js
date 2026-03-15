const connectToDB = require("./configs/db");

const express = require("express");
const router = require("./routes/library.routes");
const app = express();
const port = 3000;

//body parser middleware
app.use(express.json());
connectToDB();

app.get("/test", (req, res)=>{
    res.send("this is a test route");
})

app.use("/", router)

app.use((req, res)=>{
    res.send("this is a wrong route")
})

//starting a port
app.listen(port, ()=>{
    console.log("app is running on port", port)
})