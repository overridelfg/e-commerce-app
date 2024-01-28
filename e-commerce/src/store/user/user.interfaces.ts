import { IUser } from "../../types/IUser";

export interface IUserState {
    email: string;
    name: string;
}

export interface IInitialState  {
    user: IUserState | null;
    isLoading: boolean;
}

export interface ITokens {
    accessToken: string;
    // refreshToken: string;
}

export interface IEmailPassword {
    email: string;
    password: string;
    name?: string;
}

export interface IAuthResponse {
    tokens: ITokens;
    user: IUser;
}