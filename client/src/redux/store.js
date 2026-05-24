import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import productSlice from './slices/productSlice';
import cartSlice from './slices/cartSlice';
import orderSlice from './slices/orderSlice';
import wishlistSlice from './slices/wishlistSlice';
import adminSlice from './slices/adminSlice';

const store = configureStore({
    reducer: {
        auth: authSlice,
        products: productSlice,
        cart: cartSlice,
        orders: orderSlice,
        wishlist: wishlistSlice,
        admin: adminSlice,
    },
});

export default store;
