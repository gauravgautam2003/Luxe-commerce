import express from "express";
import cors from "cors";
import productRouter from "./routes/products.route.js";
import ENV from "./config/env.js";
const app = express();

/**
 * use middleware for authentucation
 * custom middlewares
 */

app.use(express.json());
app.use(express.urlencoded({extended : true}));


/**
 * use cors for cross origin resource sharing
 * custom cors options
 */

app.use(cors({
    origin: ENV.VITE_API_URL
}));

/**
 * use productRouter for product routes
 * custom routes for product
 */

app.use("/api/products", productRouter);


/**
 * export app.ts for server.ts
 * to create server
 */

export default app;