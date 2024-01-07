import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import CategoriesSidebar from "../components/CategoriesSidebar";
import { CartProvider } from "../providers/CartProvider";

interface MainLayoutProps {
    
}
 
const MainLayout: React.FC<MainLayoutProps> = () => {
    return ( 
        <CartProvider>
            <Box sx={{display: "flex", flexDirection: "column", height: "100svh"}}>
                <Header/>
                <Box sx={{display: "flex", flexGrow: "1"}}>
                    <CategoriesSidebar/>
                    <Container maxWidth = {"lg"} sx={{margin: "2rem"}}>
                        <Outlet/>
                    </Container>
                </Box>
            </Box>
        </CartProvider>
    );
}
 
export default MainLayout;