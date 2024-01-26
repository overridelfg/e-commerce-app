import axios from "axios";
import { instance } from "../api/api.interceptor";
import { IAuthResponse, IEmailPassword } from "../store/user/user.interfaces";
import { saveToStorage } from "./auth.helper";

export class AuthService {
    async main(type: 'login' | 'register', data: IEmailPassword) {
        const response = await axios<IAuthResponse>({
            method: 'POST',
            url: `auth/${type}`,
            data
        })

        if(response.data.tokens.accessToken) saveToStorage(response.data)

        return data;
    }
}

export default new AuthService();