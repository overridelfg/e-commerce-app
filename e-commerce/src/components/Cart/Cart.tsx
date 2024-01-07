import { Box, Typography } from "@mui/material";
import { cartSeletor } from "./cartSelectors";
import { useSelector } from "react-redux";
import { cartTotalPriceSelector } from "./cartSelectors";
import { formatCurrency } from "../../utils/formatCurrency";
import CartItem from "./CartItem/CartItem";
import { Link } from "react-router-dom";
import { useCart } from "../../providers/CartProvider";


interface CartProps {
    
}
 
const Cart: React.FC<CartProps> = () => {

    const cart = useSelector(cartSeletor);
    const cartTotalPrice = useSelector(cartTotalPriceSelector);

    return <Box sx={{display: "flex", flexDirection: "column", gap: "2rem"}}>
        {cart.map(product => {
            return (
                <CartItem product={product.item}/>
            )
        })}
        <Typography color={"white"} sx={{textAlign: "end"}}>{"Total price: " + formatCurrency(cartTotalPrice)}</Typography>
    </Box>
}
 
export default Cart;