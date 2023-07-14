import express from "express";
import productServices from "../services/product.services.js";

const productRouter = express.Router();

productRouter.post("/", productServices._createProduct);
productRouter.post("/addproducttouser", productServices._addProductToUser);
productRouter.get("/", productServices._getAllProduct);
productRouter.get("/:id", productServices._getProductById);

export default productRouter