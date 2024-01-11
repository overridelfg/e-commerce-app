import { Box, Rating, Typography, BoxProps } from "@mui/material";
import { formatCurrency } from "../../utils/formatCurrency";
import { IProduct } from "../../models/IProduct";
import { IReview } from "../../models/IReview";
import { useReview } from "../../providers/ReviewProvider";

interface ProductProps extends BoxProps  {
    product: IProduct;
}
 
const Product: React.FC<ProductProps> = (props) => {

    const { product } = props;
    const { reviews } = useReview();

    const descriptionList = product!.description.split(';');

    const getProductTotalRating = () => {
        const totalRating = reviews.reduce((rating: number, currentReview: IReview) => {
            return rating + currentReview.rating;
        }, 0);

        return (totalRating / reviews.length).toFixed(1);
    }

    console.log(product)

    const totalRating: number = +getProductTotalRating();

    return ( 
        <Box color={"white"} sx={{display: "flex", flexDirection: "column", gap: ".5rem"}}{...props}>
            {product ? (
                <>
                
                <Typography variant="h2">{product.title}</Typography>
                <Typography>Brand: {product.brand}</Typography>
                <Box sx={{display: "flex"}}>
                    <Typography>{totalRating}</Typography>
                    <Rating name="read-only" precision={0.5} value={totalRating} readOnly />
                </Box>
                <Typography >{formatCurrency(product.price)}</Typography>
                <Typography className="product-details__description">
                    <Typography>About the item<br/></Typography>
                    <ul>
                        {descriptionList.map((el: string, id: number) => <li key={id}>{el}</li>)}
                    </ul>
                </Typography>
                </>
            ) : <><h2>Error</h2></>}
        </Box>
     );
}
 
export default Product;