import { Schema, model } from "mongoose";
import type { IProduct } from "../interfaces/product.interface.js";

const productSchema = new Schema<IProduct>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
            min: 0,
        },
        stock: {
            type: Number,
            required: true,
            default: 0,
        },
        images: [
            {
                type: String,
            },
        ],
        categoryId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Product = model<IProduct>("Product", productSchema);

export default Product;