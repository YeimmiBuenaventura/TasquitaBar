import { configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducer from "./carSlice";
//Established Store
export const store = configureStore({
    reducer : {
        cart : cartReducer,
    }
})