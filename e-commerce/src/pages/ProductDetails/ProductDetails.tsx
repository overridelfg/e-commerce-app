import { Box } from "@mui/material";
import ImageViewer from "../../widgets/ImageViewer";
import Product from "../../components/Product";
import { useParams } from "react-router-dom";

interface ProductDetailsProps {
    
}
 
const ProductDetails: React.FC<ProductDetailsProps> = () => {
    
    const { productId } = useParams();

    return (<Box sx={{display: "flex", gap: "3rem"}}>
        <ImageViewer width={"40%"} sx={{flexShrink: 1}}/>
        <Product productId = {+productId!} width={"60%"} sx={{flexShrink: 1}}/>
    </Box> );
}
 
export default ProductDetails;