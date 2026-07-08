import ENV from "../config/env.js";

interface ProductParams {
    productID?: string;
    productType?: string;
}

const getProducts = async ({ productID, productType }: ProductParams) => {
    try {
        let url = ENV.PRODUCT_DUMMYDATA_URL;

        // Product by ID
        if (productID) {
            url += `/${productID}`;
        }

        // Filter by category
        if (productType) {
            url += `/category/${productType}`;
        }

        const response = await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching products:", error);
        throw error;
    }
};

export default getProducts;