import express from "express";
import categoryServices from "../services/category.services.js";
const categoryRouter = express.Router();

categoryRouter.post("/", categoryServices._createCategory);
categoryRouter.get("/", categoryServices._getAllCategorys);
categoryRouter.get("/:id", categoryServices._getCategoryById);
categoryRouter.put("/:id", categoryServices._updateCategory);
categoryRouter.delete("/:id", categoryServices._deleteCategory);

export default categoryRouter