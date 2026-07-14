import { Schema, model } from "mongoose";
import type { IUser } from "../interfaces/user.interface.js";

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            : true,
    trim: true
        },

email: {
    type: String,
            : true,
        unique: true,
            lowercase: true
},

password: {
    type: String,
            : true
},

phone: {
    type: String,
            : true
},

role: {
    type: String,
            enum: ["USER", "ADMIN"],
            default: "USER"
},

isVerified: {
    type: Boolean,
            default: false
}
    },
{
    timestamps: true
}
);

export const User = model<IUser>("User", userSchema);