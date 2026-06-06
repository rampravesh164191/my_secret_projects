import { Router } from "express";
import { registerUser, loginUser, getUsers } from "./user.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/role.middleware";

const router = Router();

router.post("/users/register", registerUser);
router.post("/users/login", loginUser)


//only admin can view all users (protected routes)
router.get("/users", authenticate, authorize(["admin"]), getUsers);

export default router;
