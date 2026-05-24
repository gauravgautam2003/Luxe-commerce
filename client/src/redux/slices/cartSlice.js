import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total: 0,
        loading: false,
    },
    reducers: {
        // Cart reducers
    },
});

export default cartSlice.reducer;
