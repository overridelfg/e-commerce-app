import { createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../../types/IProduct";

export interface Cart {
    item: IProduct
    quantity: number
}

interface CartState {
    cart: Cart[]
}

const initialState: CartState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increaseQuantity: (state, action) => {
            let isItem = false;
            for(let i = 0; i < state.cart.length; i++){
                if(state.cart[i].item._id === action.payload._id){
                    isItem = true;
                    break;
                }
            }
            if(!isItem) {
                state.cart.push({item: action.payload, quantity: 1});
            }else{
                state.cart = state.cart.map(cartItem => {
                    if(cartItem.item._id === action.payload._id) {
                        return {...cartItem, quantity: cartItem.quantity + 1};
                    }else {
                        return cartItem;
                    }
                })
            }
        },
        decreaseQuantity: (state, action) => {
            if(state.cart.find(cartItem => cartItem.item._id === action.payload._id)?.quantity === 1){
                state.cart = state.cart.filter(cartItem => cartItem.item._id !== action.payload._id);
            } else {
                state.cart = state.cart.map(cartItem => {
                    if(cartItem.item._id === action.payload._id){
                        return {...cartItem, quantity: cartItem.quantity - 1}
                    } else {
                        return cartItem;
                    }
                })
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(cartItem => cartItem.item._id !== action.payload._id);
        }
    }
});

const {reducer, actions} = cartSlice;

export default reducer;

export const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart
} = actions