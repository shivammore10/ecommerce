import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";

const loadState = () => {
    try {
        const serializedState = localStorage.getItem("reduxState");
        return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (error) {
        console.error("Could not load state", error);
        return undefined;
    }
};

const saveState = (state) => {
    try {
        localStorage.setItem("reduxState", JSON.stringify(state));
    } catch (error) {
        console.error("Could not save state", error);
    }
};

const store = configureStore({
    reducer: {
        auth: authReducer,
        products: productReducer,
        cart: cartReducer,
    },
    preloadedState: loadState()
});

store.subscribe(() => {
    saveState(store.getState());
});

export default store;
