import { Schema, model } from "mongoose";
import type { IAddress } from "../interfaces/address.interface.js";

const addressSchema = new Schema<IAddress>(
    {
        userId: {
            type: String,
            required: true
        },
        fullName: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
        phone: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        },
        isDefault: {
            type: Boolean
        }
    },
    {
        timestamps: true
    }
);

const Address = model<IAddress>("Address", addressSchema);