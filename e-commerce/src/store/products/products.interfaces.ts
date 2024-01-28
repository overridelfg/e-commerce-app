import { IProduct } from "../../types/IProduct";

export interface IProductsResponse {
    products: IProduct[];
    length: number;
}

export interface IInitialState {
    products: IProduct[];
}