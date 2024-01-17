import { Box, Checkbox, FormControlLabel, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import { IProduct } from "../../models/IProduct";
import { ICateogry } from "../../models/ICategory";
import { IGetAllCateogriesDTO } from "../../models/dto/IGetAllCateogriesDTO";


interface CategoriesFilterProps {
    
}
 
const CategoriesFilter: React.FC<CategoriesFilterProps> = () => {

    const [categories, setCategories]  = useState<ICateogry[]>([]);
    const [currentFilters, setCurrentFilters] = useState("all");
    const { request } = useHttp();

    const filterHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.checked) {
            setCurrentFilters(e.target.value);
        }else {
            setCurrentFilters("all");
        }
    };

    useEffect(() => {
        // request(`products/categories/${currentFilters}`, 'get').then((res: IProduct[]) => {
            
        // })

        request(`categories`).then((res: IGetAllCateogriesDTO) => {
            setCategories(res.categories);
        })
    }, []);


    console.log(currentFilters)

    return ( 
        <Box sx={{display: "flex", flexDirection: "column", gap: "1rem", width: "200px"}}>
            <Box sx={{display: "flex", flexDirection: "column", gap: ".3rem"}}>
                <Typography variant="h5" color={"white"}>Category</Typography>
                {categories.map((category, id) => {
                    return <FormControlLabel 
                    sx={{color: "white", gap: ".5rem", marginLeft: ".5rem"}}
                    label={category.name}
                    control={
                        <Checkbox
                        sx={{alignSelf: "flex-start", color: "white", padding: 0}}
                        value={category.name}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => filterHandler(e)}/>
                    }/>
                })}
            </Box>
        </Box>
     );
}
 
export default CategoriesFilter;