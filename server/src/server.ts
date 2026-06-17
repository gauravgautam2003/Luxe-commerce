import app from "./app.js";
import ENV from "./config/env.js";

const PORT = ENV.PORT || 4000;

/**
 * create server using app.ts file
 * server currently listen local host PORT:3000
 * add funtionality for production using NODE_ENV
 */

function serverRunning() {
    try {
        if(ENV.NODE_ENV === "development") {
            app.listen(PORT,() => {
                console.log(`http:localhost:${PORT}`);
            });
        }
    } catch (error) {
        console.log("server is not working: ", error);
    }
}

serverRunning();