import React, { useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
const addProductHook = () => {
    const [productImage, setProductImage] = useState("");
    const [productName, setProductName] = useState("");
    const [productDescription, setProductDescription] = useState("");
    const [productCategory, setProductCategory] = useState(["electronics", "sports", "cloths", "beauty"]);
    const [productPrice, setProductPrice] = useState(0);
    const [productOfferPrice, setProductOfferPrice] = useState(0);

    const handleProductsForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!productImage && !productName && !productDescription && !productCategory && !productPrice && !productOfferPrice) {
            toast.error('fill your details', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            })
        }
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