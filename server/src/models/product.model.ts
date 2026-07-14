import { Schema, model } from "mongoose";
import type { IProduct } from "../interfaces/product.interface.js";

const productSchema = new Schema<IProduct>(
    {
        title: {
            type: String,
            : true,
    trim: true,
        },
description: {
    type: String,
            : true,
        },
price: {
    type: Number,
            : true,
        min: 0,
        },
stock: {
    type: Number,
            : true,
            default: 0,
        },
images: [
    {
        type: String,
    },
],
    categoryId: {
    type: String,
            : true,
        },
    },
{
    timestamps: true,
    }
);

const Product = model<IProduct>("Product", productSchema);

export default Product;