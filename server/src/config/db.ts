import mongoose from "mongoose";
import ENV from "./env.js";

/**
 * name connectDB
 * @description connect with database using mongoose
 * @status public
 */

const connectDB = async () => {
    try {

        if(!ENV.MONGODB_URI) {
            console.log("please add your database string");
        }

        await mongoose.connect(ENV.MONGODB_URI);
        console.log("mongodb successfuly connected: ✅");

    } catch (error) {
        console.log("invalid database string: ❌");
    }
}

export default connectDB