const express = require("express");
const { addUser, getUser, login } = require("../controllers/user.controller");
const UserRouter = express.Router();

//add users
UserRouter.post("/signup", addUser);

//get users
UserRouter.get("/", getUser);

//login
UserRouter.post("/login", login);

module.exports = UserRouter; 