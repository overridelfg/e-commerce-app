import axios from "axios";
import { instance } from "../api/api.interceptor";
import { IAuthResponse, IEmailPassword } from "../store/user/user.interfaces";
import { saveToStorage } from "./auth.helper";
import { IProductsResponse } from "../store/products/products.interfaces";
import { TypeProductDataFilters } from "../store/filters/filtersSlice";

export class ProductService {

    async getAll(filters: TypeProductDataFilters) {
       const queryParams = `?page=${filters.page}&perPage=${filters.perPage}&sort=${filters.sort}&categoryNames=${filters.categoryNames}&searchTerm=${filters.searchTerm}&minPrice=${filters.minPrice}&maxPrice=${filters.maxPrice}`;

        return instance<IProductsResponse>({
            method: 'GET',
            url: `products${queryParams}`
        });
    }

    async getById(id: string) {
        return await instance<IProductsResponse>({
            method: 'GET',
            url: `products/${id}`
        })
    }

    async getByCategoryName(name: string) {
        return await instance<IProductsResponse>({
            method: 'GET',
            url: `products/categories/${name}`
        })
    }
}

export default new ProductService();