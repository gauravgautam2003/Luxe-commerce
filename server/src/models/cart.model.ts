import { Schema, model } from "mongoose";
import type { ICartItem, ICart } from "../interfaces/cart.interface.js";

const cartItemSchema = new Schema<ICartItem>(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: 1,
            default: 1,
        },
    },
    {
        _id: false, // CartItem ke liye alag _id create nahi hoga
    }
);

const cartSchema = new Schema<ICart>(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true, // Ek user ki ek hi cart
        },

        items: {
            type: [cartItemSchema],
            default: [],
        },

        totalPrice: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);

export const Cart = model<ICart>("Cart", cartSchema);