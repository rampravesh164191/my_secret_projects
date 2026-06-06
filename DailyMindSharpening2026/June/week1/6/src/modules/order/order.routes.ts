import { Router } from "express";
import { createOrder, getMyOrders, getAllOrders, updateOrderStatus } from "./order.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/role.middleware";

const router = Router();

// User routes
router.post("/orders", authenticate, authorize(["user", "admin"]), createOrder);
router.get("/orders/my", authenticate, authorize(["user", "admin"]), getMyOrders);

// Admin routes
router.get("/orders", authenticate, authorize(["admin"]), getAllOrders);
router.put("/orders/:id", authenticate, authorize(["admin"]), updateOrderStatus);

export default router;
