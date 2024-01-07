import { Box } from "@mui/material";
import ImageViewer from "../../widgets/ImageViewer";
import Product from "../../components/Product";
import { useParams } from "react-router-dom";
import QuantityBox from "../../widgets/QuantityBox";
import Review from "../../components/Review/Review";

interface ProductDetailsProps {
    
}
 
const ProductDetails: React.FC<ProductDetailsProps> = () => {
    
    const { productId } = useParams();

    return (<Box sx={{display: "flex", flexDirection: "column", gap: "3rem"}}>
        <Box sx={{display: "flex", gap: "3rem"}}>
            <ImageViewer productId={+productId!} width={"40%"} sx={{flexShrink: 1}}/>
            <Box sx={{display: "flex", flexDirection: "column", width: "60%", gap: "1rem"}}>
                <Product productId = {+productId!}/>
                <QuantityBox productId = {+productId!} />
            </Box>
        </Box>
        <Review/>
    </Box> );
}
 
export default ProductDetails;