import { Schema, model } from "mongoose";
import type { IProduct } from "../interfaces/product.interface.js";

const productSchema = new Schema<IProduct>(
    {
        id: {
            type: String,
            required: true,
            unique: true,
        },
        title: {
            type: String,
            required: true,
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
            min: 0,
        },
        images: {
            type: [String],
            required: true,
            default: [],
        },
        categoryId: {
            type: String,
            required: true,
        },
        rating: {
            type: Number,
            required: true,
            default: 0,
            min: 0,
            max: 5,
        },
    },
    {
        timestamps: true,
    }
);

const Product = model<IProduct>("Product", productSchema);

export default Product;
