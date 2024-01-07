import styles from "./ImageViewer.module.css"

import { Box, BoxProps, ImageListItem} from "@mui/material";
import { useState, MouseEvent } from "react";
import Image from "../../ui/Image/Image";

const data = [{
    id: 1,
    img: "https://m.media-amazon.com/images/I/81M2m0Eh2vL._AC_UY436_FMwebp_QL65_.jpg",
    imges: [
        "https://m.media-amazon.com/images/I/81M2m0Eh2vL._AC_UY436_FMwebp_QL65_.jpg",
        "https://m.media-amazon.com/images/I/81q0vIRHV4L._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/81B3HTt-BOL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71wrLA73ODL._AC_SL1500_.jpg",
        "https://m.media-amazon.com/images/I/71wrLA73ODL._AC_SL1500_.jpg",
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
    description: "Package Dimensions: 1.778 cms (L) x 7.874 cms (W) x 1.778 cms (H);Product Type: Portable Electronic Device Stand;Package Quantity: 1;Country Of Origin: China"
}];

interface ImageViewerProps extends BoxProps{
    productId: number;
}


const ImageViewer: React.FC<ImageViewerProps> = (props) => {

    const {productId} = props;
    const [currentImage, setCurrentImage] = useState<number>(0);

    const product = data.find(product => product.id === productId)!;

    return <Box 
    sx={{display: "flex", flexDirection: "column"}}
    {...props}
    >
        <Box sx={{width: "100%", aspectRatio: 1, borderRadius: "20px"}}>
            <Image src={product.imges[currentImage]}/>
        </Box>
        <Box sx={{ display: "flex", marginTop: "1rem", flexWrap: "wrap", alignContent: "start", gap: "10px"}}>
        {product.imges.map(((img, id) => {
            return <Box 
                sx={{height: "80px", aspectRatio: 1, backgroundColor: "white", borderRadius: "5px"}}
                key = {id}
                className={styles.otherImg}
                onMouseEnter={() => setCurrentImage(id)}>
                    <Image src={img} alt=""/>
            </Box>
        }))}
        </Box>
    </Box>;
}
 
export default ImageViewer;