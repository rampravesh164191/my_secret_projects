import app from "./app";
import connectDB from "./config/db";
import { env } from "./utils/env";

const PORT = env.PORT;

// Connect to DB first
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT} in ${env.NODE_ENV} mode`);
});
