import { Box } from "@mui/material";
import ImageViewer from "../../widgets/ImageViewer";
import Product from "../../components/Product";
import { useParams } from "react-router-dom";
import QuantityBox from "../../widgets/QuantityBox";
import Review from "../../components/Review/Review";
import { useEffect, useState } from "react";
import  axios from "axios";
import { IProduct } from "../../models/IProduct";

interface ProductDetailsProps {
    
}

 
const ProductDetails: React.FC<ProductDetailsProps> = () => {
    
    const { productId } = useParams();

    const productInit: IProduct = {
        _id: "string",
        img: "string",
        imges: [],
        title: "string",
        price: 1,
        rating: 1,
        brand: "string",
        description: "string"
    }

    const [product, setProduct] = useState<IProduct>(productInit);


    const getProductById = async () => {
        console.log(productId)
        await axios.get<IProduct>(`http://localhost:3001/products/${productId}`).then((res) => {
            setProduct(res.data)
            console.log(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }

    useEffect( () => {
        getProductById();
    }, []);


    return (<Box sx={{display: "flex", flexDirection: "column", gap: "3rem"}}>
        <Box sx={{display: "flex", gap: "3rem"}}>
            <ImageViewer product={product} width={"40%"} sx={{flexShrink: 1}}/>
            <Box sx={{display: "flex", flexDirection: "column", width: "60%", gap: "1rem"}}>
                <Product product = {product}/>
                <QuantityBox product = {product} />
            </Box>
        </Box>
        <Review/>
    </Box> );
}
 
export default ProductDetails;