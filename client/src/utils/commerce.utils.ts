import type { CartItem, CartSummary, Order } from "../types/commerce.types";

const TAX_RATE = 0.08;

export const getCartItemKey = (productId: string, option = "") => `${productId}:${option}`;

export const createOrderId = () => `LX-${Math.floor(10000 + Math.random() * 90000)}`;

export const calculateCartSummary = (cartItems: CartItem[]): CartSummary => {
    const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
    const tax = subtotal * TAX_RATE;
    const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

    return {
        subtotal,
        tax,
        total: subtotal + tax,
        cartCount,
    };
};

export const addCartItem = (cartItems: CartItem[], nextItem: CartItem) => {
    const key = getCartItemKey(nextItem.product.id, nextItem.option);
    const exists = cartItems.some((item) => getCartItemKey(item.product.id, item.option) === key);

    if (!exists) {
        return [...cartItems, nextItem];
    }

    return cartItems.map((item) =>
        getCartItemKey(item.product.id, item.option) === key
            ? { ...item, quantity: item.quantity + nextItem.quantity }
            : item
    );
};

export const updateCartItemQuantity = (
    cartItems: CartItem[],
    productId: string,
    quantity: number,
    option = ""
) => {
    const key = getCartItemKey(productId, option);

    return cartItems.map((item) =>
        getCartItemKey(item.product.id, item.option) === key
            ? { ...item, quantity: Math.max(1, quantity) }
            : item
    );
};

export const removeCartItem = (cartItems: CartItem[], productId: string, option = "") => {
    const key = getCartItemKey(productId, option);

    return cartItems.filter((item) => getCartItemKey(item.product.id, item.option) !== key);
};

export const createOrderFromCart = (cartItems: CartItem[], total: number): Order => ({
    id: createOrderId(),
    date: new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }),
    status: "In Transit",
    eta: "3-5 business days",
    items: cartItems,
    total,
});
