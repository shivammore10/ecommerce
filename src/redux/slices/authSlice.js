import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: JSON.parse(localStorage.getItem("currentUser")) || null,
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            localStorage.setItem("currentUser", JSON.stringify(action.payload));
            state.isAuthenticated = true;
        },
        logout: (state) => {
            state.user = null;
            localStorage.removeItem("currentUser");
            state.isAuthenticated = false;
        }
    }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
