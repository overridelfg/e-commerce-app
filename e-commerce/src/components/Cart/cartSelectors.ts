import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../../store";


const cartItemIdSelector = (state:RootState, itemId: number) => itemId;

export const cartSeletor = (state: RootState) => state.cartReducer.cart

export const cartTotalSelector = createSelector([
    cartSeletor],
    (cart) => {
       return cart.reduce((quantity, cartItem) => quantity + cartItem.quantity, 0);
});

export const cartTotalPriceSelector = createSelector([
    cartSeletor],
    (cart) => {
        return cart.reduce((price, cartItem) => price + (+cartItem.item.price * cartItem.quantity), 0);
});

export const getItemQuantity = createSelector([
    cartSeletor, 
    cartItemIdSelector],
    (cart, itemId) => {
        const item = cart.find(cartItem => cartItem.item.id === itemId);
        return item ? item.quantity : 0;
    });

