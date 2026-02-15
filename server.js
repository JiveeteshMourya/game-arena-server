import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import logger from "./src/common/utils/logger.js";
import connectDB from "./src/common/db/dbConnection.js";
import { errorHandler } from "./src/middlewares/errorMiddlewares.js";
import cors from "cors";

import authRouter from "./src/routes/authRoutes.js";

dotenv.config({ path: "./.env" });
const app = express();
const port = process.env.PORT || 9000;
const isProd = process.env.NODE_ENV === "production";

app.use("/api/v1/auth", authRouter);
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
