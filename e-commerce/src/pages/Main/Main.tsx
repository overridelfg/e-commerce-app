import { Box, Typography, Pagination } from "@mui/material";
import ProductList from "../../components/ProductsList/ProductsList";

interface MainProps {
    
}
 
const Main: React.FC<MainProps> = () => {
    return <Box sx={{margin: "1rem 2rem"}}>
        <Typography variant="h4" color={"white"}>Category</Typography>
        <ProductList/>
        <Pagination count={10} color={"primary"} sx={{display: "flex", justifyContent: "center"}}/>
    </Box>
}
 
export default Main;