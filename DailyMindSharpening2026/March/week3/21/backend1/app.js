const { connectToDB } = require("./configs/db.config");

const express = require("express");
const MovieRouter = require("./routers/movie.router");
const UserRouter = require("./routers/user.router");
const BookingRouter = require("./routers/booking.router");
const app = express();
connectToDB();
const port = 3000;
//body parser middleware
app.use(express.json());

//handle movie router
app.use("/movies", MovieRouter);

//handle user router
app.use("/users", UserRouter);

//handle booking router
app.use("/bookings", BookingRouter);

//test route
app.get("/test", (req, res)=>{
    res.send("this is a test route");
})

//handle wrong routes
app.use((req, res)=>{
    res.status(404).send("wrong route");
})

//start a server
app.listen(port, ()=>{
    console.log("server starting on port ",port)
})