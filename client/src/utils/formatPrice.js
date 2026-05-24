export const formatPrice = (price, currency = 'USD') => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency,
    }).format(price);
};

export const calculateDiscount = (originalPrice, discountedPrice) => {
    return Math.round(((originalPrice - discountedPrice) / originalPrice) * 100);
};
