import { Box, Typography } from "@mui/material";
import { useHttp } from "../../hooks/useHttp";
import { IProduct } from "../../types/IProduct";
import { useEffect, useState } from "react";
import CategoryService from "../../services/category.service";
import { ICateogry } from "../../types/ICategory";
import ProductService from "../../services/product.service";
import { useActions } from "../../hooks/useActions";
import { useDispatch } from "react-redux";
import { updateCategoryQueryParam, updateQueryParam } from "../../store/filters/filtersSlice";

interface CategoriesSidebarProps {
    
}
 
const CategoriesSidebar: React.FC<CategoriesSidebarProps> = () => {

    const [categories, setCategories] = useState<ICateogry[]>([]);
    const { setCurrentProductList } = useActions();

    const dispatch = useDispatch();

    const getAllCatgories = async () => {
        CategoryService.getAll().then(categories => {
            setCategories(categories.data.data);
        })
    };

    const getProductsByCategoryName = async (name: string) => {
        dispatch(updateCategoryQueryParam({key: 'categoryNames', value: name}));
    };

    useEffect(() => {
        getAllCatgories();
    }, []);

    return <Box sx={{display: "flex", flexDirection: "column", flexShrink: 0, width: "220px", backgroundColor: "#191f25", padding: "16px 24px"}}>
        <Typography variant="h5" color={"white"} sx={{marginBottom: ".4rem"}}>Categories: </Typography>
        {categories.map((category: ICateogry, id: number) => {
            return (
                <Typography
                variant = "h6"
                color={"white"}
                sx={{wordWrap: "break-word", marginLeft: ".4rem", cursor: "pointer"}}
                key={id}
                onClick={() => {getProductsByCategoryName(category.name)}}
                >
                    {category.name}
                </Typography>
            )
        })}
    </Box>
}
 
export default CategoriesSidebar;