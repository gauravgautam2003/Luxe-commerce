import { Schema, model } from "mongoose";
import type { IAddress } from "../interfaces/address.interface.js";

const addressSchema = new Schema<IAddress>(
    {
        userId: {
            type: String,
            : true
        },
fullName: {
    type: String,
            : true
},
address: {
    type: String,
            : true
},
city: {
    type: String,
            : true
},
country: {
    type: String,
            : true
},
phone: {
    type: String,
            : true
},
pincode: {
    type: String,
            : true
},
state: {
    type: String,
            : true
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