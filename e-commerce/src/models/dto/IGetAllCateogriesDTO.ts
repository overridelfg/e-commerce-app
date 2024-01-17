import { ICateogry } from "../ICategory";

export interface IGetAllCateogriesDTO {
    message: string;
    categories: ICateogry[];
}