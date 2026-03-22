const express = require("express");
const { addUser, getUsers } = require("../controllers/user.controller");
const UserRouter = express.Router();

//create user
UserRouter.post("/", addUser);

//get all users
UserRouter.get("/", getUsers);

module.exports = UserRouter;