import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Header from "../components/Header";
import CategoriesSidebar from "../components/CategoriesSidebar";

interface MainLayoutProps {
    
}
 
const MainLayout: React.FC<MainLayoutProps> = () => {
    return ( 
        <Box sx={{display: "flex", flexDirection: "column"}}>
            <Header/>
            <Box sx={{display: "flex"}}>
                <CategoriesSidebar/>
                <Box sx={{margin: "2rem"}}>
                    <Outlet/>
                </Box>
            </Box>
        </Box>
    );
}
 
export default MainLayout;