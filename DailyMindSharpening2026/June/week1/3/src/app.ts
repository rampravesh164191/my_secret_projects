import express, { Application } from "express";
import userRoutes from "./modules/user/user.routes";
import productRouter from "./modules/product/product.routes";
import orderRoutes from "./modules/order/order.routes";

const app: Application = express();

app.use(express.json());

// Register routes
app.use("/api", userRoutes);

app.use("/api",productRouter)

app.use("/api", orderRoutes);


export default app;
