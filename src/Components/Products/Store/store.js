import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./carSlice";

export const store = configureStore({
    reducer : {
        cart : cartReducer,
    }
})