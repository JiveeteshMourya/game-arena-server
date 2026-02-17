import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import logger from "./src/common/utils/logger.js";
import connectDB from "./src/common/db/dbConnection.js";
import { errorHandler } from "./src/middlewares/errorMiddlewares.js";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./src/routes/authRoutes.js";
import snakeGameRouter from "./src/routes/snakeGameRoutes.js";
import simonSaysGameRouter from "./src/routes/simonSaysGameRoutes.js";

dotenv.config({ path: "./.env" });
const app = express();
const port = process.env.PORT || 9000;
const isProd = process.env.NODE_ENV === "production";

if (!isProd) {
  app.use(
    morgan(":method :url :status :res[content-length] - :response-time ms", {
      stream: { write: (msg) => logger.http(msg.trim()) },
    }),
  );
}

app.use(
  cors({
    origin: ["http://localhost:5173", process.env.CORS_ORIGIN],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/snake-game", snakeGameRouter);
app.use("/api/v1/simon-says-game", simonSaysGameRouter);
app.get("/api/v1/health", (req, res) => {
  res.status(200).json({ message: "Server is up and running" });
});

app.use(errorHandler);

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error => ", error);
      throw error;
    });
    app.listen(port, () => {
      console.log(
        `Server is listening on port => ${port}, in ${process.env.NODE_ENV} mode`,
      );
    });
  })
  .catch((error) => {
    console.log("DB connection failed => ", error);
  });
