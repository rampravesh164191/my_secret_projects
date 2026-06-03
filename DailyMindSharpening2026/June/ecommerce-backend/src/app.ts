import express, { Application } from "express";
import userRoutes from "./modules/user/user.routes";
import productRoutes from "./modules/product/product.routes";

const app: Application = express();

app.use(express.json());

// Register routes
app.use("/api", userRoutes);

app.use("api",productRouts)

export default app;
