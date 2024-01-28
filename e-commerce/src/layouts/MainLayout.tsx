import { Outlet } from "react-router-dom";
import { Box, Container } from "@mui/material";
import Header from "../components/Header";
import CategoriesSidebar from "../components/CategoriesSidebar";
import { CartProvider } from "../providers/CartProvider";
import { ReviewProvider } from "../providers/ReviewProvider";
import { AuthModalProvider } from "../providers/AuthProvider";

interface MainLayoutProps {
    
}
 
const MainLayout: React.FC<MainLayoutProps> = () => {
    return ( 
        <CartProvider>
            <AuthModalProvider>
                <Box sx={{display: "flex", flexDirection: "column", height: "100svh"}}>
                    <Header/>
                    <Box sx={{display: "flex", flexGrow: 1}}>
                        <CategoriesSidebar sx={{display: "flex", flexDirection: "column", flexShrink: 0, width: "220px", backgroundColor: "#191f25", padding: "16px 24px"}}/>
                        <Container maxWidth = {"lg"} sx={{margin: "2rem"}}>
                            <Outlet/>
                        </Container>
                    </Box>
                </Box>
            </AuthModalProvider>
        </CartProvider>
    );
}
 
export default MainLayout;