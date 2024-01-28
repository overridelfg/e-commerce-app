import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./products.interfaces";
import { IProduct } from "../../types/IProduct";

const initialState: IInitialState = {
    products: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        setCurrentProductList: (state, action: PayloadAction<IProduct[]>) => {
            console.log(action.payload);
            state.products = action.payload;
        }
    }
});

export const { actions } = productSlice;

