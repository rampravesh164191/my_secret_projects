import express, { Application } from "express";
import userRoutes from "./modules/user/user.routes";
import productRouter from "./modules/product/product.routes";
import orderRoutes from "./modules/order/order.routes";
import { errorHandler } from "./middleware/error.middleware";
import { requestLogger } from "./middleware/logger.middleware";
import logger from "./utils/logger";
import { setupSwagger } from "./utils/swagger";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";

const app: Application = express();
app.use(express.json());

app.use(helmet());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per window
  message: "Too many requests from this IP, please try again later."
});

app.use(limiter);

const corsOptions = {
  origin: ["http://localhost:3000"], // frontend domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
};

app.use(cors(corsOptions));

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
setupSwagger(app);


export default app;
