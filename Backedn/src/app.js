import express from "express";
import cors from "cors";

import healthRouter from "./routes/health.routes.js";

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_ORIGIN || "*",
  })
);
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Welcome to GameLinked API",
  });
});

app.use("/api/health", healthRouter);

app.use((_req, res) => {
  res.status(404).json({ message: "Route not found" });
});

export default app;
