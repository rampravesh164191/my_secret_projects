const express = require("express");
const UserRouter = express.Router();

//get users
UserRouter.get("/", getUsers);

//add User
UserRouter.post("/", addUser);

//replace user
UserRouter.put("/:userId", replaceUser);

//update user
UserRouter.patch("/:userId", updateUser);

//delete User
UserRouter.delete("/:userId", deleteUser);

module.exports = UserRouter