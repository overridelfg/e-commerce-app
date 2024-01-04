import { createSlice } from "@reduxjs/toolkit";

export interface Cart {
    item: {
        id: number,
        img: string,
        imges: Array<string>,
        title: string,
        price: number,
        rating: number,
        brand: string,
        description: string
    }
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
                if(state.cart[i].item.id === action.payload.id){
                    isItem = true;
                    break;
                }
            }
            if(!isItem) {
                state.cart.push({item: action.payload, quantity: 1});
            }else{
                state.cart = state.cart.map(cartItem => {
                    if(cartItem.item.id === action.payload.id) {
                        return {...cartItem, quantity: cartItem.quantity + 1};
                    }else {
                        return cartItem;
                    }
                })
            }
        },
        decreaseQuantity: (state, action) => {
            if(state.cart.find(cartItem => cartItem.item.id === action.payload.id)?.quantity === 1){
                state.cart = state.cart.filter(cartItem => cartItem.item.id !== action.payload.id);
            } else {
                state.cart = state.cart.map(cartItem => {
                    if(cartItem.item.id === action.payload.id){
                        return {...cartItem, quantity: cartItem.quantity - 1}
                    } else {
                        return cartItem;
                    }
                })
            }
        },
        removeFromCart: (state, action) => {
            state.cart = state.cart.filter(cartItem => cartItem.item.id !== action.payload.id);
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