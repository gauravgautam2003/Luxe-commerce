import Products from "../api/products.js";

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    const { productID, productType } = req.query;

    try {
        const products = await Products({
            productID: productID as string,
            productType: productType as string
        });

        
        res.status(200).json({
            success: true,
            count: products.length,
            data: products
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching products"
        });
    }
}

export const getProductById = async (req: Request, res: Response): Promise<void> => {
    const { productID } = req.params;
    
    try {
        const product = await Products({ productID });

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found"
            });
        }

        res.status(200).json({
            success: true,
            data: product
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching product"
        });
    }
}
