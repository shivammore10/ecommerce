import { createSlice } from "@reduxjs/toolkit";

const getCartForUser = (email) => {
    const userCarts = JSON.parse(localStorage.getItem("userCarts")) || {};
    return userCarts[email] || [];
};

const saveCartForUser = (email, cart) => {
    const userCarts = JSON.parse(localStorage.getItem("userCarts")) || {};
    userCarts[email] = cart;
    localStorage.setItem("userCarts", JSON.stringify(userCarts));
};

const initialState = {
    cart: [],
    userEmail: JSON.parse(localStorage.getItem("currentUser"))?.email || null,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        initializeCart: (state, action) => {
            state.userEmail = action.payload;
            state.cart = getCartForUser(action.payload);
        },
        addToCart: (state, action) => {
            const product = action.payload;
            const existingItem = state.cart.find(item => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.cart.push({ ...product, quantity: 1 });
            }
            saveCartForUser(state.userEmail, state.cart);
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload);
            saveCartForUser(state.userEmail, state.cart);
        },
        increaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) item.quantity += 1;
            saveCartForUser(state.userEmail, state.cart);
        },
        decreaseQuantity: (state, action) => {
            const item = state.cart.find(item => item.id === action.payload);
            if (item) {
                item.quantity -= 1;
                if (item.quantity === 0) {
                    state.cart = state.cart.filter(i => i.id !== action.payload);
                }
            }
            saveCartForUser(state.userEmail, state.cart);
        },
        clearCartOnLogout: (state) => {
            state.cart = [];
            state.userEmail = null;
        }
    }
});

export const { initializeCart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCartOnLogout } = cartSlice.actions;
export default cartSlice.reducer;
