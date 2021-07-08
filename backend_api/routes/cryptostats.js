import express from "express";
const router = express.Router();

import { getCryptoStats } from "../controllers/cryptostats.js";

router.get("/", getCryptoStats);

export default router;