import axios from "axios";
import { useCallback } from "react";


export const useHttp = () => {

    const request = useCallback(async (url: string, method: string = 'get', body?: unknown, headers = {'Content-Type': 'application/json'}) => {

        try {
            const response = await axios.request({
                url,
                method,
                baseURL: 'http://localhost:3001/',
                headers,
                data: body,
                timeout: 5000,
            });
    
            if (response.status < 200 || response.status > 300 ) {
                throw new Error(`Could not fetch ${url}, status: ${response.status}`);
            }
            return response.data;

        } catch (err) {
            throw err;
        }
       
    }, [])

    return { request };
}