import { Router } from "express";
import { createProduct, getProducts, getProductById, updateProduct, deleteProduct } from "./product.controller";
import { authenticate } from "../../middleware/auth.middleware";
import { authorize } from "../../middleware/role.middleware";
import { upload } from "../../middleware/upload.middleware";
import { validate } from "../../middleware/validation.middleware";
import { productSchema } from "./product.validation";

const productRouter = Router();

// Public routes
productRouter.get("/products", getProducts);
productRouter.get("/products/:id", getProductById);

// Admin-only routes
// productRouter.post("/products", authenticate, authorize(["admin"]), upload.single("image"), createProduct);
productRouter.post("/products", authenticate, authorize(["admin"]), upload.single("image"), validate(productSchema), createProduct);
productRouter.put("/products/:id", authenticate, authorize(["admin"]), updateProduct);
productRouter.delete("/products/:id", authenticate, authorize(["admin"]), deleteProduct);

export default productRouter;
