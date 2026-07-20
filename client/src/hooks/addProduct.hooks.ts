import React, { useState } from "react";

const addProductHook = () => {
    const [productImage, setProductImage] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productCategory, setProductCategory] = useState(["electronics", "sports", "cloths", "beauty"]);
    const [productPrice, setProductPrice] = useState(0);
    const [productOfferPrice, setProductOfferPrice] = useState(0);

    const handleProductsForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

    }


    return {
        productImage, setProductImage,
        productName, setProductName,
        productDescription, setProductDescription,
        productCategory, setProductCategory,
        productPrice, setProductPrice,
        productOfferPrice, setProductOfferPrice,
        handleProductsForm
    }
}

export default addProductHook;