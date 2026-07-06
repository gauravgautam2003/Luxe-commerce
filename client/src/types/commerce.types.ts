import type { Product } from "../data/products";

export type CartItem = {
    product: Product;
    quantity: number;
    option?: string;
};

export type Order = {
    id: string;
    date: string;
    status: "In Transit" | "Delivered";
    eta: string;
    items: CartItem[];
    total: number;
};

export type CommerceState = {
    cartItems: CartItem[];
    orders: Order[];
};

export type CartSummary = {
    subtotal: number;
    tax: number;
    total: number;
    cartCount: number;
};

export type CommerceAction =
    | { type: "ADD_TO_CART"; product: Product; option?: string }
    | { type: "UPDATE_QUANTITY"; productId: string; quantity: number; option?: string }
    | { type: "REMOVE_FROM_CART"; productId: string; option?: string }
    | { type: "CHECKOUT"; order: Order };

export type CommerceContextValue = CommerceState &
    CartSummary & {
        addToCart: (product: Product, option?: string) => void;
        updateQuantity: (productId: string, quantity: number, option?: string) => void;
        removeFromCart: (productId: string, option?: string) => void;
        checkout: () => Order | null;
    };
