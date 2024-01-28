import { instance } from "../api/api.interceptor";
import { ICateogry } from "../types/ICategory";
import { IResponse } from "./response.interface";

const CATEGORIES = "categories";

export class CategoryService {

    async getAll() {
        return instance<IResponse<ICateogry[]>>({
            method: 'GET',
            url: CATEGORIES
        });
    }

    async getById(id: string) {
        return instance<ICateogry>({
            method: 'GET',
            url: `${CATEGORIES}/${id}`
        })
    }
}

export default new CategoryService();