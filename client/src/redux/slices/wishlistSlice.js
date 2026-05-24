import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        items: [],
        loading: false,
    },
    reducers: {
        // Wishlist reducers
    },
});

export default wishlistSlice.reducer;
