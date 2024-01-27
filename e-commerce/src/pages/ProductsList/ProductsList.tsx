import { Box, Container, Grid } from "@mui/material";
import ProductCard from "../../widgets/ProductCard";
import Pagination from "../../widgets/Pagination";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../../types/IProduct";
import { Button } from "../../ui";
import { CategoriesFilter } from "../../widgets";
import SortFilter from "../../widgets/SortFilter/SortFilter";
import { useHttp } from "../../hooks/useHttp";
import { IGetAllProductsDTO } from "../../types/dto/IGetAllProductsDTO";
import { useSelector } from "react-redux";
import { filtersSelector } from "../../store/filters/filtersSelector";

interface ProductListProps {
    
}

const ProductList: React.FC<ProductListProps> = () => {

    const [products, setProducts] = useState<IProduct[]>([]);
    const [productsSize, setProductsSize] = useState<number>(1);
    const [isFiltersOpen, setIsFiltersOpen] = useState(false);

    const { request } = useHttp();

    const filtersQuery = useSelector(filtersSelector);

    useEffect(() => {
       request(`products?page=${filtersQuery.page}&perPage=${filtersQuery.perPage}&sort=${filtersQuery.sort}&categoryNames=${filtersQuery.categoryNames}&searchTerm=${filtersQuery.searchTerm}&minPrice=${filtersQuery.minPrice}&maxPrice=${filtersQuery.maxPrice}`, 'get', {
       }).then((res: IGetAllProductsDTO) => {
            setProducts(res.products);
            setProductsSize(res.length);
        })
    }, [filtersQuery]);


    return (
        <Box sx={{display: "flex", height: "100%", gap: "1rem"}}>
            <CategoriesFilter isOpen = {isFiltersOpen}/>
            <Box sx={{flexGrow: 1, display: "flex", flexDirection: "column"}}>
                <Box sx={{display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between"}}>
                    <Button onClick = {() => {setIsFiltersOpen(!isFiltersOpen)}}>
                        {isFiltersOpen ? "Close filters" : "Open filters"}
                        </Button>
                    <SortFilter/>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", justifyContent: "space-between", flexGrow: 1}}>
                    <Grid container spacing={3} sx={{marginTop: "2rem"}}>
                        {products.map((product, index) => {
                            return (<Grid key={index} item xs = {12} md={4} lg = {3}>
                                <Link to={`product/${product._id}`}>
                                    <ProductCard product={product}/>
                                </Link>
                            </Grid>)
                        })}
                    </Grid>
                    <Pagination 
                    count={Math.floor(productsSize / 4) + 1}
                    color={"primary"}
                    sx={{display: "flex", justifyContent: "center"}}/>
                </Box>
            </Box>
        </Box>
    );
}
 
export default ProductList;