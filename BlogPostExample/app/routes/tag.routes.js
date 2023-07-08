import express from "express";
import tagServices from "../services/tag.services.js";
const tagRouter = express.Router();

tagRouter.post("/", tagServices._createTag);
tagRouter.get("/", tagServices._getAllTags);
tagRouter.get("/:id", tagServices._getTagById);
tagRouter.put("/:id", tagServices._updateTag);
tagRouter.delete("/:id", tagServices._deleteTag);

export default tagRouter