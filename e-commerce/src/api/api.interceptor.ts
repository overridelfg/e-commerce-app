import axios from "axios";
import { getContentType } from "./api.helper";
import { getAccessToken } from "../services/auth.helper";

const instance = axios.create({
     baseURL: "http://localhost:3001/",
     headers: getContentType()
});

instance.interceptors.request.use(config => {
    const accessToken = getAccessToken();

    if(config.headers && accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    };
     
    return config;
});

instance.interceptors.response.use(config => config, async error => {
    const originalRequest = error.config;
})