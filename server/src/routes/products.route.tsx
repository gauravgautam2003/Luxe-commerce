import { Router } from "express";
import { getProducts, getProductById, createProduct } from "../controllers/product.controller.js";

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

/**
 * name: createProduct
 * @route POST /api/products
 * @desc Create a new product
 * @access Public
 */
productRouter.post("/", createProduct);

export default productRouter;
