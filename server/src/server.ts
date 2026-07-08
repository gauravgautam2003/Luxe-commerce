import app from "./app.js";
import ENV from "./config/env.js";
import connectDB from "./config/db.js";

const PORT = Number(ENV.PORT) || 4000;

/**
 * create server function
 * write code in the try catch
 * call database
 */

const startServer = async (): Promise<void> => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`🚀 Server running in ${ENV.NODE_ENV} mode on http://localhost:${PORT}`);
        });

    } catch (error) {
        console.error("❌ Failed to start server:", error);
        process.exit(1);
    }
};

startServer();