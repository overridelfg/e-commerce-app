import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import { IProduct } from "../../models/IProduct";
import { ICateogry } from "../../models/ICategory";
import { IGetAllCateogriesDTO } from "../../models/dto/IGetAllCateogriesDTO";

import styles from './CategoriesFilter.module.css';
import { useDispatch } from "react-redux";
import { updateQueryParam } from "../../store/filters/filtersSlice";
import RangeFilter from "../RangeFilter/RangeFilter";


interface CategoriesFilterProps {
    isOpen: boolean;
}
 
const CategoriesFilter: React.FC<CategoriesFilterProps> = (props) => {

    const [categories, setCategories]  = useState<ICateogry[]>([]);
    const { isOpen } = props;
    const { request } = useHttp();
    const dispatch = useDispatch();

    const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateQueryParam({key: 'categoryNames', value: event.target.value}))
    };

    useEffect(() => {
        request(`categories`).then((res: IGetAllCateogriesDTO) => {
            setCategories(res.categories);
        })
    }, []);

    return ( 
        <Box
        className = {isOpen ? styles.open : styles.box}
        sx={{display: "flex", flexDirection: "column", gap: "1rem" , flexShrink: 0}}>
            <Box sx={{display: "flex", flexDirection: "column", gap: ".3rem"}}>
                <Typography variant="h6" color={"white"}>Price from/to</Typography>
                <RangeFilter/>
                <Typography variant="h6" color={"white"}>Category</Typography>
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