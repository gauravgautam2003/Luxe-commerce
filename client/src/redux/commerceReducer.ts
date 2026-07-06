import type { CommerceAction, CommerceState } from "../types/commerce.types";
import { addCartItem, removeCartItem, updateCartItemQuantity } from "../utils/commerce.utils";

export const commerceReducer = (state: CommerceState, action: CommerceAction): CommerceState => {
    switch (action.type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cartItems: addCartItem(state.cartItems, {
                    product: action.product,
                    quantity: 1,
                    option: action.option,
                }),
            };

        case "UPDATE_QUANTITY":
            return {
                ...state,
                cartItems: updateCartItemQuantity(
                    state.cartItems,
                    action.productId,
                    action.quantity,
                    action.option
                ),
            };

        case "REMOVE_FROM_CART":
            return {
                ...state,
                cartItems: removeCartItem(state.cartItems, action.productId, action.option),
            };

        case "CHECKOUT":
            return {
                cartItems: [],
                orders: [action.order, ...state.orders],
            };

        default:
            return state;
    }
};
