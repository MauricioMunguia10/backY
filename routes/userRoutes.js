import express from "express";
import { getProfile } from "../controllers/userController.js";
import verifyToken from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/me", verifyToken, getProfile);

export default router;
