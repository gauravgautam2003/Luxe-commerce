import dotenv from "dotenv";
dotenv.config({quiet: true});

const ENV = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    PRODUCT_DUMMYDATA_URL: process.env.PRODUCT_DUMMYDATA_URL
}

export default ENV