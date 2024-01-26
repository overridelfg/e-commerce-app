import { createAsyncThunk } from "@reduxjs/toolkit";
import { IAuthResponse, IEmailPassword } from "./user.interfaces";
import AuthService from "../../services/auth.service";
import { removeFromStorage } from "../../services/auth.helper";


export const register = createAsyncThunk(
    'auth/register',
    async(data: IEmailPassword, thunkApi) => {
        try{
            const response = await AuthService.main('register', data);
            return response;
        }catch(error) {
            return thunkApi.rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk('auth/login',
async(data: IEmailPassword, thunkApi) => {
    try{
        const response = await AuthService.main('login', data);
        return response;
    }catch(error) {
        return thunkApi.rejectWithValue(error);
    }
}
)

export const logout = createAsyncThunk(
    'auth/logout',
    async() => {
        removeFromStorage();
    }
);

