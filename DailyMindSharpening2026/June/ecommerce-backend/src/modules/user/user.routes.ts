import { Router } from "express";
import { registerUser, loginUser, getUsers } from "./user.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/role.middleware";
import { validate } from "../../middleware/validation.middleware";
import { registerSchema, loginSchema } from "./user.validation";

const router = Router();

// User routes
router.post("/users/register", validate(registerSchema), registerUser);
router.post("/users/login", validate(loginSchema), loginUser);


// router.post("/users/register", registerUser);
// router.post("/users/login", loginUser)


//only admin can view all users (protected routes)
router.get("/users", authenticate, authorize(["admin"]), getUsers);


/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Validation error
 */


export default router;
