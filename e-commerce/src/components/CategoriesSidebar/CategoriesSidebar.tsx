import { Box, BoxProps, Button, Typography } from "@mui/material";
import { useHttp } from "../../hooks/useHttp";
import { IProduct } from "../../types/IProduct";
import { useEffect, useState } from "react";
import CategoryService from "../../services/category.service";
import { ICateogry } from "../../types/ICategory";
import ProductService from "../../services/product.service";
import { useActions } from "../../hooks/useActions";
import { useDispatch } from "react-redux";
import { updateCategoryQueryParam, updateQueryParam } from "../../store/filters/filtersSlice";
import { useAuthSelector } from "../../hooks/useAuthSelector";
import { useAuth } from "../../providers/AuthProvider";

interface CategoriesSidebarProps {
    
}
 
const CategoriesSidebar: React.FC<CategoriesSidebarProps & BoxProps> = ({sx}) => {

    const [categories, setCategories] = useState<ICateogry[]>([]);


    const { logout } = useActions();
    const user = useAuthSelector().user;
    const { openAuthModal } = useAuth();

    const dispatch = useDispatch();

    const getAllCatgories = async () => {
        await CategoryService.getAll().then(categories => {
            setCategories(categories.data.data);
        })
    };

    const getProductsByCategoryName = async (name: string) => {
        dispatch(updateCategoryQueryParam({key: 'categoryNames', value: name}));
    };

    const authHandler = () => {
        if(user) {
            logout();
        }else{
            openAuthModal()
        }
    }

    useEffect(() => {
        getAllCatgories();
    }, []);

    return <Box sx={sx}>
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
        <Button 
        sx={{marginTop: "auto"}}
        onClick={() => {authHandler()}}>
            {user ? "Log out" : "Log in"}
        </Button>
    </Box>
}
 
export default CategoriesSidebar;