import { Box, Container, Grid } from "@mui/material";
import ProductCard from "../../widgets/ProductCard";
import Pagination from "../../widgets/Pagination";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../../models/IProduct";
import { Button } from "../../ui";
import { CategoriesFilter } from "../../widgets";
import SortFilter from "../../widgets/SortFilter/SortFilter";
import { useHttp } from "../../hooks/useHttp";

interface ProductListProps {
    
}

const ProductList: React.FC<ProductListProps> = () => {


    const [products, setProducts] = useState<IProduct[]>([]);
    const [currentSort, setCurrentSort] = useState<string>('All');
    const { request } = useHttp();

    useEffect(() => {
       request(`products${currentSort !== 'All' ? `?sort=${currentSort}` : ''}`, 'get', {
       }).then((res) => {
            setProducts(res)
        })
    }, [currentSort]);


    return (
        <Box sx={{display: "flex", height: "100%"}}>
            <CategoriesFilter/>
            <Box sx={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "spa"}}>
                <SortFilter setCurrentSort = {(sort: string) => setCurrentSort(sort)}/>
                <Grid container spacing={3} sx={{marginTop: "2rem"}}>
                    {products.map((product, index) => {
                        return (<Grid key={index} item xs = {12} md={4} lg = {3}>
                            <Link to={`product/${product._id}`}>
                                <ProductCard product={product}/>
                            </Link>
                        </Grid>)
                    })}
                </Grid>
                <Pagination count={10} color={"primary"} sx={{display: "flex", justifyContent: "center",}}/>
            </Box>
        </Box>
       
    );
}
 
export default ProductList;