import { ICateogry } from "./ICategory";

export interface IProduct {
    _id: string;
    img: string
    imges: Array<string>
    title: string
    price: number
    rating: number
    brand: string
    description: string
    createdAt: Date,
    categories: ICateogry[]
}