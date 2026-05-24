import { createSlice } from '@reduxjs/toolkit';

const adminSlice = createSlice({
    name: 'admin',
    initialState: {
        dashboard: {},
        loading: false,
        error: null,
    },
    reducers: {
        // Admin reducers
    },
});

export default adminSlice.reducer;
