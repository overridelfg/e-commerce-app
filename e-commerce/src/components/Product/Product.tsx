import { Box, Rating, Typography, BoxProps } from "@mui/material";
import { formatCurrency } from "../../utils/formatCurrency";


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

interface ProductProps extends BoxProps  {
    productId: number;
}
 
const Product: React.FC<ProductProps> = (props) => {

    const { productId } = props;
    const product = data.find(product => product.id === productId);

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