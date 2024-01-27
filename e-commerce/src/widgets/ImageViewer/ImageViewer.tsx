import styles from "./ImageViewer.module.css"

import { Box, BoxProps} from "@mui/material";
import { useState } from "react";
import Image from "../../ui/Image/Image";
import { IProduct } from "../../types/IProduct";

interface ImageViewerProps extends BoxProps{
    product: IProduct;
}

const ImageViewer: React.FC<ImageViewerProps> = (props) => {

    const { product } = props;
    const [currentImage, setCurrentImage] = useState<number>(0);

    return <Box 
    sx={{display: "flex", flexDirection: "column"}}
    {...props}
    >
        <Box sx={{width: "100%", aspectRatio: 1, borderRadius: "20px"}}>
            <Image src={product.imges[currentImage]}/>
        </Box>
        <Box sx={{ display: "flex", marginTop: "1rem", alignContent: "start", gap: "10px", flexWrap: "nowrap", overflow: "scroll"}}>
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