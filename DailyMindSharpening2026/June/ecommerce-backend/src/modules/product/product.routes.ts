import { Router } from "express";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "./product.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/role.middleware";

const router = Router();

// Public routes
router.get("/products", getProducts);
router.get("/products/:id", getProductById);

// Admin-only routes
router.post("/products", authenticate, authorize(["admin"]), createProduct);
router.put("/products/:id", authenticate, authorize(["admin"]), updateProduct);
router.delete("/products/:id", authenticate, authorize(["admin"]), deleteProduct);

export default router;
