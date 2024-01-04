import { Box, Typography } from "@mui/material";
import { Button } from "../../ui";
import { increaseQuantity, decreaseQuantity } from '../../components/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getItemQuantity } from "../../components/Cart/cartSelectors";
import { RootState } from "../../store";

interface QuantityBoxProps {
    
}

const item = {
    id: 1,
    img: "https://m.media-amazon.com/images/I/81M2m0Eh2vL._AC_UY436_FMwebp_QL65_.jpg",
    imges: [
        "https://m.media-amazon.com/images/I/81M2m0Eh2vL._AC_UY436_FMwebp_QL65_.jpg",
        "https://m.media-amazon.com/images/I/81q0vIRHV4L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81B3HTt-BOL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71wrLA73ODL._AC_SL1500_.jpg"
    ],
    title: "IKEA Bergenes Holder for Mobile Phone Tablet Bamboo 104.579.99, Length: 5' Width: 3 ¼ '",
    price: 5,
    rating: 4.4,
    brand: "IKEA",
    description: "description"
}
 
const QuantityBox: React.FC<QuantityBoxProps> = () => {

    const disptach = useDispatch();
    const quantity = useSelector<RootState, number>(state => getItemQuantity(state, 1));

    return (
        <Box sx={{display: "grid", width: "250px", gridTemplateColumns: "repeat(3, 1fr)"}}>
            <Button sx={{fontSize: "1.4rem", backgroundColor: "var(--color-primary-400)", color: "white", borderRadius: "unset", width: "100%", flexGrow: 1, flexShrink: 0}}
            onClick={() => {disptach(decreaseQuantity(item))}}>
                -
            </Button>
            <Box sx={{fontSize: "1.4rem", backgroundColor: "var(--color-primary-400)", color: "white", width: "100%", display: "flex", alignItems: "center",  justifyContent: "center", flexGrow: 1, flexShrink: 0}}>
                {quantity}
            </Box>
            <Button sx={{fontSize: "1.4rem", backgroundColor: "var(--color-primary-400)", color: "white", borderRadius: "unset", width: "100%", flexGrow: 1, flexShrink: 0}}
            onClick={() => {disptach(increaseQuantity(item))}}>
                +
            </Button>
        </Box>
    );
}
 
export default QuantityBox;