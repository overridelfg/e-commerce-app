import { Box, Typography, Rating } from "@mui/material";
import Image from "../../../ui/Image/Image";
import QuantityBox from "../../../widgets/QuantityBox/QuantityBox";
import { IProduct } from "../../../types/IProduct";
import { Link } from "react-router-dom";
import { useCart } from "../../../providers/CartProvider";

interface CartItemProps {
    product: IProduct;
}
 
const CartItem: React.FC<CartItemProps> = ({product}) => {

    const { closeCart } = useCart()

    return (
        <Box sx={{display: "flex", flexDirection: "row", gap: ".7rem", color: "white", padding: "1rem 0", borderBottom: "1px solid white"}}>
                <Link to={`product/${product._id}`} onClick={closeCart}>
                    <Box sx={{width: "150px", aspectRatio: 1, flexShrink: 0, alignSelf: "start"}}>
                            <Image src = {product.img}/>
                    </Box>
                </Link>
                <Box sx={{display: "flex", flexDirection: "column", gap: ".5rem", color: "white"}}>
                    <Link to={`product/${product._id}`} onClick={closeCart}>
                        <Typography>{product.title}</Typography>
                    </Link>
                    <Typography>Brand: {product.brand}</Typography>
                    <Box sx={{display: "flex", gap: ".3rem"}}>
                        <Typography>{product.rating}</Typography>
                        <Rating name="read-only" precision={0.5} value={product.rating} readOnly />
                    </Box>
                    <Typography>Quantity: </Typography>
                    <QuantityBox product={product}/>
                </Box>
        </Box>
    );
}
 
export default CartItem;