import type { CommerceState } from "../types/commerce.types";

const STORAGE_KEY = "luxe-commerce-state";

export const initialCommerceState: CommerceState = {
    cartItems: [],
    orders: [],
};

export const loadCommerceState = (): CommerceState => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) {
        return initialCommerceState;
    }

    try {
        return {
            ...initialCommerceState,
            ...JSON.parse(saved),
        };
    } catch {
        return initialCommerceState;
    }
};

export const saveCommerceState = (state: CommerceState) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};
