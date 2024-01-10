import { Box, Rating, Typography, BoxProps } from "@mui/material";
import { formatCurrency } from "../../utils/formatCurrency";
import { IProduct } from "../../models/IProduct";

interface ProductProps extends BoxProps  {
    product: IProduct;
}
 
const Product: React.FC<ProductProps> = (props) => {

    const { product } = props;

    const descriptionList = product!.description.split(';');

    return ( 
        <Box color={"white"} sx={{display: "flex", flexDirection: "column", gap: ".5rem"}}{...props}>
            {product ? (
                <>
                
                <Typography variant="h2">{product.title}</Typography>
                <Typography>Brand: {product.brand}</Typography>
                <Box sx={{display: "flex"}}>
                    <Typography>{product.rating}</Typography>
                    <Rating name="read-only" precision={0.5} value={product.rating} readOnly />
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