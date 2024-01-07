import { Box, Typography } from "@mui/material";
import { Button } from "../../ui";
import { increaseQuantity, decreaseQuantity } from '../../components/Cart/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getItemQuantity } from "../../components/Cart/cartSelectors";
import { RootState } from "../../store";

interface QuantityBoxProps {
    productId: number;
}

interface Data {
    id: number;
    img: string;
    imges: string[];
    title: string;
    price: number;
    rating: number;
    brand: string;
    description: string;
}

const data: Data[] = [{
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
    description: "Package Dimensions: 1.778 cms (L) x 7.874 cms (W) x 1.778 cms (H);Product Type: Portable Electronic Device Stand;Package Quantity: 1;Country Of Origin: China"
},
{
    id: 2,
    img: "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
    imges: [
        "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
        "https://m.media-amazon.com/images/I/51B+9W1haeS._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/51DOjm3bFzS._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/11Zyg9jjuwS._AC_.jpg"
    ],
    title: "IKEA KALAS 8 no of Spoon, mixed colors, Plastic",
    price: 8,
    rating: 5 ,
    brand: "IKEA",
    description: "best for kids - Smooth Touch;original ikea product;Package Quantity: 1;kalas spoon mixed colours"
},
{
    id: 3,
    img: "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
    imges: [
        "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
        "https://m.media-amazon.com/images/I/51B+9W1haeS._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/51DOjm3bFzS._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/11Zyg9jjuwS._AC_.jpg"
    ],
    title: "IKEA KALAS 8 no of Spoon, mixed colors, Plastic",
    price: 8,
    rating: 5 ,
    brand: "IKEA",
    description: "best for kids - Smooth Touch;original ikea product;Package Quantity: 1;kalas spoon mixed colours"
},
{
    id: 4,
    img: "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
    imges: [
        "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
        "https://m.media-amazon.com/images/I/51B+9W1haeS._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/51DOjm3bFzS._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/11Zyg9jjuwS._AC_.jpg"
    ],
    title: "IKEA KALAS 8 no of Spoon, mixed colors, Plastic",
    price: 8,
    rating: 5 ,
    brand: "IKEA",
    description: "best for kids - Smooth Touch;original ikea product;Package Quantity: 1;kalas spoon mixed colours"
},
{
    id: 5,
    img: "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
    imges: [
        "https://m.media-amazon.com/images/I/314yTXc79MS._AC_.jpg",
        "https://m.media-amazon.com/images/I/51B+9W1haeS._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/51DOjm3bFzS._AC_SX679_.jpg",
        "https://m.media-amazon.com/images/I/11Zyg9jjuwS._AC_.jpg"
    ],
    title: "IKEA KALAS 8 no of Spoon, mixed colors, Plastic",
    price: 8,
    rating: 5 ,
    brand: "IKEA",
    description: "best for kids - Smooth Touch;original ikea product;Package Quantity: 1;kalas spoon mixed colours"
}
]

const QuantityBox: React.FC<QuantityBoxProps> = (props) => {

    const { productId } = props
    const disptach = useDispatch();
    const quantity = useSelector<RootState, number>(state => getItemQuantity(state, productId));

    const product = data.find(product => product.id === productId);

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