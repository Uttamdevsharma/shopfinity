
import { createSlice } from "@reduxjs/toolkit";

  const cartSlice = createSlice({
    name : "cart",
    initialState : [],
    reducers: {
        addToCart(state,action){

            const product = state.find(
                (product ) => product.id === action.payload.id,
            );

            product ? product.quantity++ : state.push({...action.payload,quantity:1});   
        },

        removeItemFromCart(state,action) {
            return state.filter((product) => product.id !== action.payload);
        },

        modifyQunantityOfAnItem(state,action) {
            const product = state.find ((item) => item.id === action.payload.id);
            if(product){

                product.quantity = action.payload.quantity;

            }
            
        },

        clearCart() {
            return [];
        },
    },
});

export default cartSlice

export const {
    addToCart,
    removeItemFromCart,
    modifyQunantityOfAnItem,
    clearCart,
} = cartSlice.actions;