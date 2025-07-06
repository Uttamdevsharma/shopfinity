import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/Cart";

export const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
    }
})