import express from "express";

const app = express();

/**
 * use middleware for authentucation
 * custom middlewares
 */

app.use(express.json());
app.use(express.urlencoded({extended : true}));


/**
 * export app.ts for server.ts
 * to create server
 */

export default app;