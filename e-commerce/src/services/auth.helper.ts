import Cookie from 'js-cookie';
import { IAuthResponse, ITokens } from '../store/user/user.interfaces';

export const saveTokensStorage = (data: ITokens) => {
    Cookie.set('accessToken', data.accessToken);
    // Cookie.set('refreshToken', data.refreshToken);
}

export const getAccessToken = () => {
    const accessToken = Cookie.get('accessToken');
    return accessToken || null;
};

export const getUserFromStorage = async () => {
    return JSON.parse(localStorage.getItem('user') || '{}');
}

export const saveToStorage = (data: IAuthResponse) => {
    saveTokensStorage(data.tokens);
    localStorage.setItem('user', JSON.stringify(data.user));
};

export const removeFromStorage = () => {
    Cookie.remove('accessToken');
    Cookie.remove('refreshToken');
    localStorage.removeItem('user');
};