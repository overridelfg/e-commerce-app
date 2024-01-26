import { IUser } from "../../types/IUser";

export interface IUserState {
    email: string;
}

export interface IInitialState  {
    user: IUserState | null;
    isLoading: boolean;
}

export interface ITokens {
    accessToken: string;
    refreshToken: string;
}

export interface IEmailPassword {
    email: string;
    password: string;
}

export interface IAuthResponse {
    tokens: ITokens;
    user: IUser;
}