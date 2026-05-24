import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {
        // Product reducers
    },
});

export default productSlice.reducer;
