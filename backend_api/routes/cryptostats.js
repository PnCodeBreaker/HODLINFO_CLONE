import express from "express";
const router = express.Router();

import { getCryptoStats, updateCryptoStats } from "../controllers/cryptostats.js";

router.get("/", getCryptoStats);

// This is an extra/additional route to update the data in database from WazirX API
router.get("/updatedata", updateCryptoStats)

export default router;