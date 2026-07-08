import dotenv from "dotenv";

dotenv.config({quiet: true});

const ENV = {
  PORT: process.env.PORT || "5000",
  NODE_ENV: process.env.NODE_ENV || "development",
  PRODUCT_DUMMYDATA_URL: process.env.PRODUCT_DUMMYDATA_URL || "",
  VITE_API_URL: process.env.VITE_API_URL || "",
  MONGODB_URI: process.env.MONGODB_URI || "",
};

export default ENV;