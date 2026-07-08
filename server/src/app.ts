import express from "express";
import productRouter from "./routes/products.route.js";
const app = express();

/**
 * use middleware for authentucation
 * custom middlewares
 */

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use("/api/products", productRouter);


/**
 * export app.ts for server.ts
 * to create server
 */

export default app;