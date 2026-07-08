import { Router } from "express";
import { getProducts, getProductById } from "../controllers/product.controller.js";

const productRouter = Router();

/**
 * name: getProducts
 * @route GET /api/products
 * @desc Get all products or filter by productType
 * @access Public
 */

productRouter.get("/", getProducts);

/**
 * name: getProductById
 * @route GET /api/products/:id
 * @desc Get product by ID
 * @access Public
 */
productRouter.get("/:id", getProductById);

export default productRouter;