const express = require("express");
const { getUsers, addUser, replaceUser, updateUser, deleteUser } = require("../controllers/userController");
const UserRouter = express.Router();

//get users
UserRouter.get("/", getUsers);

//add user
UserRouter.post("/", addUser);

//replace user
UserRouter.put("/:userId", replaceUser);

//update User
UserRouter.patch("/:userId", updateUser);

//delete User
UserRouter.delete("/:userId", deleteUser)

module.exports = UserRouter;