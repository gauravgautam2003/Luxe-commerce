import { Schema, model } from "mongoose";
import type { INotification } from "../interfaces/notification.interface.js";

const notificationSchema = new Schema<INotification>(
    {
        userId: {
            type: String,
            required: true
        },
        title: {
            type: String,
        },
        isRead: {
            type: Boolean,
        },
        message: {
            type: String,
        }
    },
    {
        timestamps: true
    }
)

const Notification = model("Notification", notificationSchema);
export default Notification