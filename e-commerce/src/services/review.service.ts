import axios from "axios";
import { instance } from "../api/api.interceptor";
import { IAuthResponse, IEmailPassword } from "../store/user/user.interfaces";
import { saveToStorage } from "./auth.helper";
import { IProductsResponse } from "../store/products/products.interfaces";
import { ICategoriesResponse } from "../store/categories/categories.interface";
import { IReviewResponse } from "../store/reviews/reviews.interface";
import { IReview } from "../types/IReview";

const REVIEWS = "reviews";

export class ReviewService {

    async getByProductId(productId: string) {
        return await instance<IReviewResponse>({
            method: 'GET',
            url: `${REVIEWS}/${productId}`
        });
    }

    async add(productId: string, data: IReview) {
        return await instance<IReviewResponse>({
            method: 'POST',
            url: `${REVIEWS}/${productId}`,
            data
        });
    }
}

export default new ReviewService();