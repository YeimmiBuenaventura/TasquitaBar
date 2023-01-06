import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products : []
}

const cartSlice = createSlice({
    name : "cart", 
    initialState,
    reducers:{
        add:(state, action) => {
            state.products = action.payload;
        },
    }
})
export const {add} = cartSlice.actions;
export default cartSlice.reducer
