const express = require("express");
const connectToDB = require("./configs/db");
const UserRouter = require("./routes/userRouter");
const app = express();
const port = 3000;

//connect to db
connectToDB();

//body parser middleware 
app.use(express.json());

//user router
app.use("/users", UserRouter);

//starting a server
app.listen(port,()=>{
    console.log("server connecting to port ", port);
})