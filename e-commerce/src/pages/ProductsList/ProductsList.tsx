import { Box, Container, Grid } from "@mui/material";
import ProductCard from "../../widgets/ProductCard";
import Pagination from "../../widgets/Pagination";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { IProduct } from "../../models/IProduct";

interface ProductListProps {
    
}

const ProductList: React.FC<ProductListProps> = () => {


    const [products, setProducts] = useState<IProduct[]>([]);

    useEffect(() => {
        axios.get<IProduct[]>('http://localhost:3001/products').then((res) => {
            setProducts(res.data)
            console.log(res.data)
        })
    }, []);


    return (
        <Box>
            <Grid container spacing={3} sx={{marginTop: "2rem"}}>
                {products.map((product, index) => {
                    return (<Grid key={index} item xs = {12} md={4} lg = {3}>
                        <Link to={`product/${product._id}`}>
                            <ProductCard product={product}/>
                        </Link>
                    </Grid>)
                })}
            </Grid>
            <Pagination count={10} color={"primary"} sx={{display: "flex", justifyContent: "center"}}/>
        </Box>
       
    );
}
 
export default ProductList;