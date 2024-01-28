import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { ICateogry } from "../../types/ICategory";

import { useDispatch, useSelector } from "react-redux";
import { updateQueryParam } from "../../store/filters/filtersSlice";
import RangeFilter from "../RangeFilter/RangeFilter";
import CategoryService from "../../services/category.service";

import styles from './CategoriesFilter.module.css';
import { filtersSelector } from "../../store/filters/filtersSelector";


interface CategoriesFilterProps {
    isOpen: boolean;
}
 
const CategoriesFilter: React.FC<CategoriesFilterProps> = (props) => {

    const [categories, setCategories]  = useState<ICateogry[]>([]);
    const { isOpen } = props;
    const dispatch = useDispatch();

    const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(updateQueryParam({key: 'categoryNames', value: event.target.value}))
    };

    const selectedCategories = useSelector(filtersSelector)


    const getAllCatgories = async () => {
        await CategoryService.getAll().then((response) => {
            setCategories(response.data.data);
        })
    }

    useEffect(() => {
        getAllCatgories();
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
                    key={id}
                    control={
                        <Checkbox
                        checked = {selectedCategories.categoryNames?.find(name => category.name === name) ? true : false}
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