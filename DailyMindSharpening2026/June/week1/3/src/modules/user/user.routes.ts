import { Router } from "express";
import { loginUser, registerUser } from "./user.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/role.middleware";


const UserRouter = Router();
UserRouter.post("/users/register", registerUser);
UserRouter.post("/users/login", loginUser);

//only admin can view all users (protected routes)
UserRouter.get("/users", authenticate, authorize(["admin"], getUsers))

export default UserRouter