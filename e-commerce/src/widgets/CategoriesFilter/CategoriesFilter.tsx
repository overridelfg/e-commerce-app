import { Box, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useHttp } from "../../hooks/useHttp";
import { IProduct } from "../../models/IProduct";
import { ICateogry } from "../../models/ICategory";
import { IGetAllCateogriesDTO } from "../../models/dto/IGetAllCateogriesDTO";


interface CategoriesFilterProps {
    setProducts: (products: IProduct[]) => void;
}
 
const CategoriesFilter: React.FC<CategoriesFilterProps> = (props) => {

    const [categories, setCategories]  = useState<ICateogry[]>([]);
    const [currentFilters, setCurrentFilters] = useState("all");
    const { request } = useHttp();
    const { setProducts } = props;

    const filterHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        if(event.target.checked) {
            console.log("checked")
            event.target.checked = false;
        }
 
        if(event.target) {
            setCurrentFilters(event.target.value);
        }else {
            setCurrentFilters("all");
        }
    };

    const radioButtonClickHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.checked = !event.target.checked ;
    }

    useEffect(() => {
        if(currentFilters !== "All"){
            request(`products/categories/${currentFilters}`, 'get').then((res: IProduct[]) => {
                setProducts(res);
            })
        }
    }, [currentFilters]);


    useEffect(() => {
        request(`categories`).then((res: IGetAllCateogriesDTO) => {
            setCategories(res.categories);
        })
    }, []);

    return ( 
        <Box sx={{display: "flex", flexDirection: "column", gap: "1rem", width: "200px"}}>
            <Box sx={{display: "flex", flexDirection: "column", gap: ".3rem"}}>
                <Typography variant="h5" color={"white"}>Category</Typography>
                <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-radio-buttons-group-label"
                        defaultValue="All"
                        name="radio-buttons-group"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => filterHandler(event)}
                    >
                        <FormControlLabel
                            key = {1}
                            value={"All"} 
                            control={<Radio />}     
                            sx={{
                                color: "white",
                                ".Mui-checked": {
                                    color: "var(--color-primary-100)"
                                },
                                ".MuiSvgIcon-root": {
                                    color: "white"
                                },
                                }}
                            label={"All"}/>
                            {categories.map((category, id) => {
                                return (<FormControlLabel
                                    key = {id + 1}
                                    value={category.name} 
                                    control={<Radio />} 
                                    sx={{
                                        color: "white",
                                        ".MuiSvgIcon-root": {
                                            color: "white"
                                        },
                                        ".Mui-checked": {
                                            color: "var(--color-primary-100)"
                                        }
                                    }}
                                    label={category.name}
                                />
                                )}
                            )}
                    </RadioGroup>
                </FormControl>
            </Box>
        </Box>
     );
}
 
export default CategoriesFilter;