import type { Request, Response } from "express";
import Products from "../models/product.model.js";

/**
 * name: createProduct
 * @route POST /api/products
 * @desc Create a new product
 * @access Public
 */
const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id, title, description, price, stock, images, categoryId, rating } = req.body;

        if (!title || !description || !price || !stock || !images || !categoryId) {
            res.status(400).json({
                success: false,
                message: "All required fields must be provided: title, description, price, stock, images, categoryId",
            });
            return;
        }

        const product = await Products.create({
            id: id || `p-${Date.now()}`,
            title,
            description,
            price,
            stock,
            images,
            categoryId,
            rating: rating ?? 0,
        });

        res.status(201).json({
            success: true,
            message: "Product created successfully",
            data: product,
        });
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error while creating product",
        });
    }
};

/**
 * name: getProducts
 * @route GET /api/products
 * @desc Get all products with optional category filter
 * @access Public
 */
const getProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { categoryId } = req.query;
        const filter = categoryId ? { categoryId } : {};
        const products = await Products.find({ filter }).sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            count: products.length,
            data: products,
        });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error while fetching products",
        });
    }
};

/**
 * name: getProductById
 * @route GET /api/products/:id
 * @desc Get a single product by its ID
 * @access Public
 */
const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const product = await Products.findOne({ _id: id });

        if (!product) {
            res.status(404).json({
                success: false,
                message: "Product not found",
            });
            return;
        }

        res.status(200).json({
            success: true,
            data: product,
        });
    } catch (error) {
        console.error("Error fetching product:", error);
        res.status(500).json({
            success: false,
            message: "Internal server error while fetching product",
        });
    }
};

export { getProducts, getProductById, createProduct };
