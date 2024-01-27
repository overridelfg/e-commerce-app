import { Box, Rating, Typography, BoxProps } from "@mui/material";
import { formatCurrency } from "../../utils/formatCurrency";
import { IProduct } from "../../types/IProduct";
import { IReview } from "../../types/IReview";
import { useReview } from "../../providers/ReviewProvider";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface ProductProps extends BoxProps  {
    product: IProduct;
    reviewsCount?: number;
}
 
const Product: React.FC<ProductProps> = (props) => {

    const { product, reviewsCount } = props;
    const { reviews } = useReview();

    const descriptionList = product!.description.split(';');

    const getProductTotalRating = () => {
        const totalRating = reviews.reduce((rating: number, currentReview: IReview) => {
            return rating + currentReview.rating;
        }, 0);

        return (totalRating / reviews.length).toFixed(1);
    }

    const totalRating: number = +getProductTotalRating();

    return ( 
        <Box color={"white"} sx={{display: "flex", flexDirection: "column", gap: ".5rem"}}{...props}>
            {product ? (
                <>
                <Typography variant="h2">{product.title}</Typography>
                <Box 
                sx={{display: "flex", color: "var(--color-primary-400)"}}
                onClick={() => {}}>
                    <Typography 
                    color={"var(--color-primary-400)"}>
                        Reviews {reviewsCount}
                    </Typography>
                    <KeyboardArrowRightIcon/>
                </Box>
                <Box sx={{display: "flex", gap: ".3rem"}}>
                    <Typography>{totalRating}</Typography>
                    <Rating name="read-only" precision={0.5} value={totalRating} readOnly />
                </Box>
                <Typography>Brand: {product.brand}</Typography>
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