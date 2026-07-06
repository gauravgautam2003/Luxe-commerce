import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { commerceReducer } from "../redux/commerceReducer";
import { loadCommerceState, saveCommerceState } from "../services/commerceStorage.service";
import type { Product } from "../data/products";
import type { CommerceContextValue } from "../types/commerce.types";
import { calculateCartSummary, createOrderFromCart } from "../utils/commerce.utils";

const CommerceContext = createContext<CommerceContextValue | null>(null);

export const CommerceProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(commerceReducer, undefined, loadCommerceState);
    const summary = useMemo(() => calculateCartSummary(state.cartItems), [state.cartItems]);

    useEffect(() => {
        saveCommerceState(state);
    }, [state]);

    const addToCart = (product: Product, option = "") => {
        dispatch({ type: "ADD_TO_CART", product, option });
    };

    const updateQuantity = (productId: string, quantity: number, option = "") => {
        dispatch({ type: "UPDATE_QUANTITY", productId, quantity, option });
    };

    const removeFromCart = (productId: string, option = "") => {
        dispatch({ type: "REMOVE_FROM_CART", productId, option });
    };

    const checkout = () => {
        if (state.cartItems.length === 0) {
            return null;
        }

        const order = createOrderFromCart(state.cartItems, summary.total);
        dispatch({ type: "CHECKOUT", order });
        return order;
    };

    return (
        <CommerceContext.Provider
            value={{
                cartItems: state.cartItems,
                orders: state.orders,
                cartCount: summary.cartCount,
                subtotal: summary.subtotal,
                tax: summary.tax,
                total: summary.total,
                addToCart,
                updateQuantity,
                removeFromCart,
                checkout,
            }}
        >
            {children}
        </CommerceContext.Provider>
    );
};

export const useCommerce = () => {
    const context = useContext(CommerceContext);

    if (!context) {
        throw new Error("useCommerce must be used inside CommerceProvider");
    }

    return context;
};
