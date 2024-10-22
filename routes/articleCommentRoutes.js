import express from "express";
import {
  getArticleComments,
  createArticleComment,
  updateArticleComment,
  deleteArticleComment,
} from "../controllers/articleCommentController.js";

const router = express.Router();

router.get("/", getArticleComments);
router.post("/", createArticleComment);
router.patch("/:id", updateArticleComment);
router.delete("/:id", deleteArticleComment);

export default router;
