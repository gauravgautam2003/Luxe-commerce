import type { ICoupon } from "../interfaces/coupon.interface.js";
import { Schema, model } from "mongoose";

const couponSchema = new Schema<ICoupon>(
    {
        code: {
            type: String,
            required: true,
            unique: true
        },
        discount: {
            type: Number,
        },
        expiryDate: {
            type: Date,
        }
    },
    {
        timestamps : true
    });

const Coupons = model("Coupons", couponSchema);
export default Coupons;