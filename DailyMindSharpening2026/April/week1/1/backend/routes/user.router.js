const express = require("express");
const { signup, login, getUsers } = require("../controllers/user.controller");
const UserRouter = express.Router();

//signup
UserRouter.post("/signup", signup);

//login
UserRouter.post("/login", login);

//getUsers
UserRouter.get("/users", getUsers)

module.exports = UserRouter;