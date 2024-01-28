import styles from "./Header.module.css"

import { FC, useState } from "react";

import { Container, Popover, Typography } from "@mui/material";
import { Person, NightsStay, LightMode } from '@mui/icons-material';
import { Box } from "@mui/material";

import { cartSeletorTotalItemsCount } from "../Cart/cartSelectors";
import { useSelector } from "react-redux";

import { useCart } from "../../providers/CartProvider";
import { useAuth } from "../../providers/AuthProvider";

import Cart from "../Cart/Cart";
import { SearchInput } from "../../widgets";
import { Modal, Sidebar, Button } from "../../ui";
import Auth from "../Auth/Auth";
import { useAuthSelector } from "../../hooks/useAuthSelector";
import { useActions } from "../../hooks/useActions";

const Header: FC = () => {

    const { isCartOpen, openCart, closeCart } = useCart();
    const { isAuthOpen, openAuthModal, closeAuthModal } = useAuth();
    const { logout } = useActions();

    const totalCartItems: number = useSelector(cartSeletorTotalItemsCount);
    const user = useAuthSelector().user;

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleLogoutPopoverOpenClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleLogoutPopoverClose = () => {
      setAnchorEl(null);
    };

    const authClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        if(!user) {
            openAuthModal();
        }else {
            handleLogoutPopoverOpenClick(event);
        }
    }
    
    const logoutClickHandler = () => {
        logout();
    }
  
    const isPopoverOpen = Boolean(anchorEl);
    const popoverId = isPopoverOpen ? 'simple-popover' : undefined;

    return <Container
    sx={{backgroundColor: "var(--color-surface-mixed-100)", padding: "1rem", margin: 0}}
    maxWidth = {false}>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant="h4" color={"white"} sx={{width: "196px"}}>MBEF</Typography>
            <SearchInput/>
            <Box sx={{display: "flex"}}>
                <Button className={styles.buttonHeader} onClick={(event: React.MouseEvent<HTMLButtonElement>) => {authClickHandler(event)}} >
                    <Person />
                </Button>
                <Popover
                    id={popoverId}
                    open={isPopoverOpen}
                    anchorEl={anchorEl}
                    onClose={handleLogoutPopoverClose}
                    anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                    }}
                >
                    <Button onClick={() => {logoutClickHandler()}}>
                        Log out
                    </Button>
                </Popover>
                <Button
                className={styles.buttonHeader}>
                    Orders
                </Button>
                <Button
                className={styles.buttonHeader}
                onClick={() => {openCart()}}>
                    {`Cart ${totalCartItems}`}
                </Button>
                <Button
                className={styles.buttonHeader}>
                    <LightMode/>
                </Button>
            </Box>
        </Box>
        <Sidebar
            isOpen = {isCartOpen}
            closeSidebar={closeCart}
            sidebarHeaderTitle="Cart"
            width="550px"
            container={document.getElementById("sidebar")!}>
            <Cart/>
        </Sidebar>
        <Modal
        height="500px"
        isOpen = {isAuthOpen}
        closeModal = {closeAuthModal}
        container={document.getElementById("modal")!}
        sidebarHeaderTitle="Auth">
            <Auth/>
        </Modal>
    </Container>
}

export default Header;