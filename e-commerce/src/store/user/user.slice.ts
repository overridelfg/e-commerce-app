import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IInitialState } from "./user.interfaces";
import { login, logout, register } from "./user.actions";

const initialState: IInitialState = {
    user: localStorage.getItem('user') ? JSON.parse
    (localStorage.getItem('user') as string) : null,
    isLoading: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(register.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        })
        .addCase(register.rejected, (state, action) => {
            state.isLoading = false;
        })
        .addCase(login.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(login.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
        })
        .addCase(login.rejected, (state, action) => {
            state.isLoading = false;
        })
        .addCase(logout.fulfilled, (state, action) => {
            state.user = null;
        })
    }
});

