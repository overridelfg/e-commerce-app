import { Box, Typography} from "@mui/material";
import ProductList from "../../components/ProductsList/ProductsList";
import Pagination from "../../widgets/Pagination/Pagination";
import { Outlet } from "react-router-dom";

interface MainProps {
    
}
 
const Main: React.FC<MainProps> = () => {
    return <Box sx={{margin: "1rem 2rem"}}>
        <Typography variant="h4" color={"white"}>Category</Typography>
        <Outlet/>
    </Box>
}
 
export default Main;