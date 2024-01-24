import { Box, Skeleton, Stack, Typography } from "@mui/material";
import ImageViewer from "../../widgets/ImageViewer";
import Product from "../../components/Product";
import { useParams } from "react-router-dom";
import QuantityBox from "../../widgets/QuantityBox";
import Review from "../../components/Review/Review";
import { useEffect, useState } from "react";
import  axios from "axios";
import { IProduct } from "../../models/IProduct";
import { IReview } from "../../models/IReview";
import { ReviewModalProvider, ReviewProvider, useReview } from "../../providers/ReviewProvider";

interface ProductDetailsProps {
    
}

 
const ProductDetails: React.FC<ProductDetailsProps> = () => {
    
    const { productId } = useParams();

    const [product, setProduct] = useState<IProduct>();

    const { updateReviews, reviews, reviewsCount } = useReview();


    const getProductById = async () => {
        await axios.get<IProduct>(`http://localhost:3001/products/${productId}`).then((res) => {
            setProduct(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }

    const getReviewsById = async () => {
        await axios.get<IReview[]>(`http://localhost:3001/reviews/${productId}`).then((res) => {
            updateReviews(res.data)
        }).catch((err)=> {
            console.log(err)
        })
    }

    useEffect( () => {
        getProductById();
    }, []);

    useEffect( () => {
        getReviewsById();
    }, []);


    return (
    <Box sx={{display: "flex", flexDirection: "column", gap: "3rem"}}>
        {product ? (
            <>
                <Box sx={{display: "flex", gap: "3rem"}}>
                <ImageViewer product={product} width={"40%"} sx={{flexShrink: 1}}/>
                <Box sx={{display: "flex", flexDirection: "column", width: "60%", gap: "1rem"}}>
                    <Product product = {product} reviewsCount = {reviewsCount}/>
                    <QuantityBox product = {product} />
                </Box>
                </Box>
                    {reviews ? (
                        <ReviewModalProvider>
                                <Review productId={product._id}/>
                        </ReviewModalProvider>
                    ) : null}
                
            </>
    ) : (  <Stack spacing={1}>
            {/* For variant="text", adjust the height via font-size */}
            <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
      
            {/* For other variants, adjust the size with `width` and `height` */}
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
          </Stack>)}
    
    </Box> );
}
 
export default ProductDetails;