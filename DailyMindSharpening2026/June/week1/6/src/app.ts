import express, { Application } from "express";
import userRoutes from "./modules/user/user.routes";
import productRouter from "./modules/product/product.routes";
import orderRoutes from "./modules/order/order.routes";
import { errorHandler } from "./middleware/error.middleware";
import { requestLogger } from "./middleware/logger.middleware";
import logger from "./utils/logger";

const app: Application = express();

app.use(express.json());

// Register routes
app.use("/api", userRoutes);

app.use("/api",productRouter)

app.use("/api", orderRoutes);

// Request logging
app.use(requestLogger);

// Example usage of logger
logger.info("App initialized with logging");

// Register routes above...

// Error handler (last middleware)
app.use(errorHandler);



export default app;
