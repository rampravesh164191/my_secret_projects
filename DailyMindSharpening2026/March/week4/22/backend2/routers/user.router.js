const express = require("express");
const { signup, login, getUser } = require("../controllers/user.controller");
const UserRouter = express.Router();

//signin
UserRouter.post("/signup", signup);

//login
UserRouter.post("/login", login);

//get all users
UserRouter.get("/", getUser);

module.exports = UserRouter;