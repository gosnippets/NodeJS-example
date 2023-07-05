import express from "express";
import postsServices from "../services/post.services.js";
const postsRouter = express.Router();

postsRouter.post("/", postsServices._createPost);
postsRouter.get("/", postsServices._getAllPosts);
postsRouter.get("/:id", postsServices._getPostById);
postsRouter.put("/:id", postsServices._updatePost);
postsRouter.delete("/:id", postsServices._deletePost);

export default postsRouter