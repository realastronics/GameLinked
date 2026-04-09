import { Router } from "express";
import { addProfile, listProfiles } from "../controllers/profile.controller.js";

const router = Router();

router.get("/", listProfiles);

router.post("/", addProfile);

export default router;
