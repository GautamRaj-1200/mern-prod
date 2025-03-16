import express, { Express, Request, Response } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import config from "./config/config.js";
import { errorHandler } from "./middlewares/apiHandler.js";
// import path from 'path'
const app: Express = express();

app.use(
  cors({
    origin: config.CORS_ORIGIN,
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// app.use(express.static(path.join(__dirname, '../public')))
app.use(cookieParser());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ status: "OK" });
});

import apiRouter from "./routes/apiRouter.js";
//routes
app.use("/api/v1", apiRouter);

// Catch all errors using the global error handler
app.use((err: unknown, req: Request, res: Response) => {
  errorHandler(err, res);
});
export default app;
