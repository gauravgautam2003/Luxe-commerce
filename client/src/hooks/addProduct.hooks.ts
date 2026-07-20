import React, { useState } from "react";

type AddedProduct = {
    id: string;
    name: string;
    category: string;
    price: number;
    rating: number;
    inStock: boolean;
    image: string;
    description: string;
    offerPrice?: number;
};

const addProductHook = () => {
    const [productImage, setProductImage] = useState("");
    const [productImageFile, setProductImageFile] = useState<File | null>(null);
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productCategory, setProductCategory] = useState(["electronics", "sports", "cloths", "beauty"]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [productPrice, setProductPrice] = useState(0);
    const [productOfferPrice, setProductOfferPrice] = useState(0);

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0] ?? null;
        if (!file) {
            return;
        }

        setProductImageFile(file);

        const reader = new FileReader();
        reader.onload = () => {
            if (typeof reader.result === "string") {
                setProductImage(reader.result);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleProductsForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!productName.trim() || !productDescription.trim() || !selectedCategory || productPrice <= 0) {
            alert("Please fill in all required fields before submitting.");
            return;
        }

        const newProduct: AddedProduct = {
            id: `p-${Date.now()}`,
            name: productName.trim(),
            category: selectedCategory,
            price: productPrice,
            rating: 0,
            inStock: true,
            image: productImage,
            description: productDescription.trim(),
            offerPrice: productOfferPrice > 0 ? productOfferPrice : undefined,
        };

        const savedProductsJson = localStorage.getItem("luxe-added-products") ?? "[]";
        const savedProducts = JSON.parse(savedProductsJson) as AddedProduct[];
        localStorage.setItem("luxe-added-products", JSON.stringify([newProduct, ...savedProducts]));

        alert("Product added successfully.");

        setProductImage("");
        setProductImageFile(null);
        setProductName("");
        setProductDescription("");
        setSelectedCategory("");
        setProductPrice(0);
        setProductOfferPrice(0);
    };

    return {
        productImage,
        setProductImage,
        productImageFile,
        setProductImageFile,
        productName,
        setProductName,
        productDescription,
        setProductDescription,
        productCategory,
        setProductCategory,
        selectedCategory,
        setSelectedCategory,
        productPrice,
        setProductPrice,
        productOfferPrice,
        setProductOfferPrice,
        handleProductsForm,
        handleImageChange,
    };
};

export default addProductHook;
