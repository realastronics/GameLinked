import { checkDatabaseConnection } from "../models/health.model.js";

export const getHealth = async (_req, res) => {
  try {
    await checkDatabaseConnection();

    res.json({
      status: "ok",
      service: "gamelinked-backend",
      database: "connected",
      timestamp: new Date().toISOString(),
    });
  } catch {
    res.status(500).json({
      status: "error",
      service: "gamelinked-backend",
      database: "disconnected",
      timestamp: new Date().toISOString(),
    });
  }
};
