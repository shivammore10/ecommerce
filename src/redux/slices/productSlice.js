import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        { id: 1, name: "Laptop", price: 1000 },
        { id: 2, name: "Smartphone", price: 500 },
        { id: 3, name: "Headphones", price: 100 },
        { id: 4, name: "Smartwatch", price: 200 }
    ],
    searchQuery: ""
};
console.log(initialState, 'initialState');

const productSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setSearchQuery: (state, action) => {
            state.products.searchQuery = action.payload;
        },
        // addProduct: (state, action) => {
        //     state.products.push(action.payload);
        // },
        // removeProduct: (state, action) => {
        //     state.products = state.products.filter(prod => prod.id !== action.payload);
        // }
    }
});

export const { setSearchQuery } = productSlice.actions;
export default productSlice.reducer;
