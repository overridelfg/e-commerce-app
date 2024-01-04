import styles from "./ImageViewer.module.css"

import { Box, BoxProps, ImageListItem} from "@mui/material";
import { useState, MouseEvent } from "react";
import Image from "../../ui/Image/Image";

interface ImageViewerProps extends BoxProps{
    
}

const data = {
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
}

const ImageViewer: React.FC<ImageViewerProps> = (props) => {

    const [currentImage, setCurrentImage] = useState<number>(0);

    return <Box 
    sx={{display: "flex", flexDirection: "column"}}
    {...props}
    >
        <Box sx={{ aspectRatio: 1}}>
            <Image src={data.imges[currentImage]} sx={{width: "100%", height: "100%", objectFit: "contain", borderRadius: "20px"}}/>
        </Box>
        <Box sx={{ display: "flex", marginTop: "1rem", flexWrap: "wrap", alignContent: "start", gap: "10px"}}>
        {data.imges.map(((img, id) => {
            return <Image
            sx={{height: "80px", aspectRatio: 1 ,objectFit: "contain", backgroundColor: "white", borderRadius: "5px"}}
            className={styles.otherImg}
            key = {id}
            src={img}
            alt=""
            onMouseEnter={() => setCurrentImage(id)}/>;
        }))}
        </Box>
    </Box>;
}
 
export default ImageViewer;