import { Box, Typography } from "@mui/material";
import { Button } from "../../ui";
import { increaseQuantity, decreaseQuantity } from '../../components/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getItemQuantity } from "../../components/Cart/cartSelectors";
import { RootState } from "../../store";
import { IProduct } from "../../models/IProduct";

interface QuantityBoxProps {
    product: IProduct;
}


const QuantityBox: React.FC<QuantityBoxProps> = (props) => {

    const { product } = props
    const disptach = useDispatch();
    const quantity = useSelector<RootState, number>(state => getItemQuantity(state, product._id));


    return (
        <Box sx={{display: "grid", width: "250px", gridTemplateColumns: "repeat(3, 1fr)", zIndex: "70"}}>
            <Button sx={{
                fontSize: "1.4rem",
                backgroundColor: "var(--color-primary-400)",
                color: "white",
                height: "100%",
                borderRadius: "unset"}}
            onClick={() => {disptach(decreaseQuantity(product))}}>
                -
            </Button>
            <Box sx={{
                fontSize: "1.4rem",
                backgroundColor: "var(--color-primary-400)",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center" }}>
                {quantity}
            </Box>
            <Button sx={{
                fontSize: "1.4rem",
                backgroundColor: "var(--color-primary-400)",
                color: "white",
                borderRadius: "unset",}}
                onClick={() => {disptach(increaseQuantity(product))}}>
                +
            </Button>
        </Box>
    );
}
 
export default QuantityBox;