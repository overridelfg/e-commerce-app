import styles from "./Header.module.css"

import { Container, Typography } from "@mui/material";
import { FC, useState } from "react";
import { Button} from "../../ui";
import { Person, NightsStay, LightMode } from '@mui/icons-material';
import { Box } from "@mui/material";
import SearchInput from "../../widgets/SearchInput";
import Sidebar from "../../ui/Sidebar/Sidebar";

const Header: FC = () => {

    const [isCartOpen, setIsCartOpen] = useState(false);

    const showCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    return <Container
    sx={{backgroundColor: "var(--color-surface-mixed-100)", padding: "1rem", margin: 0}}
    maxWidth = {false}>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant="h4" color={"white"} sx={{width: "196px"}}>MBEF</Typography>
            <SearchInput/>
            <Box sx={{display: "flex"}}>
                <Button className={styles.buttonHeader}>
                    <Person/>
                </Button>
                <Button
                className={styles.buttonHeader}>
                    Orders
                </Button>
                <Button
                className={styles.buttonHeader}
                onClick={() => {showCart()}}>
                    {`Cart ${0}`}
                </Button>
                <Button
                className={styles.buttonHeader}>
                    <LightMode/>
                </Button>
            </Box>
        </Box>
        <Sidebar
            isOpen = {isCartOpen}
            closeSidebar={showCart}
            sidebarHeaderTitle="Cart"
            container={document.getElementById("sidebar")!}>
            <Typography>HIII</Typography>
        </Sidebar>
    </Container>
}

export default Header;