import { IProduct } from "../IProduct";

export interface IGetAllProductsDTO {
    products: IProduct[],
    length: number;
}