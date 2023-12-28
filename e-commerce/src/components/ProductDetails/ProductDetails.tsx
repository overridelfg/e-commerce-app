import { Box } from "@mui/material";
import ImageViewer from "../../widgets/ImageViewer";

interface ProductDetailsProps {
    
}
 
const ProductDetails: React.FC<ProductDetailsProps> = () => {
    return (<Box>
        <ImageViewer/>
    </Box> );
}
 
export default ProductDetails;