import express from "express";
import { getSearchArticles } from "../controllers/articleController.js";

const router = express.Router();

router.get("/", getSearchArticles);

export default router;
