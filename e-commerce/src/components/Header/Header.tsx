import styles from "./Header.module.css"

import { FC, useState } from "react";

import { Container, Typography } from "@mui/material";
import { Person, NightsStay, LightMode } from '@mui/icons-material';
import { Box } from "@mui/material";

import { cartSeletorTotalItemsCount } from "../Cart/cartSelectors";
import { useSelector } from "react-redux";

import { useCart } from "../../providers/CartProvider";
import { useAuth } from "../../providers/AuthProvider";

import Cart from "../Cart/Cart";
import Login from "../Auth/Login/Login";
import { SearchInput } from "../../widgets";
import { Modal, Sidebar, Button } from "../../ui";
import Auth from "../Auth/Auth";

const Header: FC = () => {

    const { isCartOpen, openCart, closeCart } = useCart();
    const { isAuthOpen, openAuthModal, closeAuthModal } = useAuth();

    const totalCartItems: number = useSelector(cartSeletorTotalItemsCount);

    return <Container
    sx={{backgroundColor: "var(--color-surface-mixed-100)", padding: "1rem", margin: 0}}
    maxWidth = {false}>
        <Box sx={{display: "flex", justifyContent: "space-between"}}>
            <Typography variant="h4" color={"white"} sx={{width: "196px"}}>MBEF</Typography>
            <SearchInput/>
            <Box sx={{display: "flex"}}>
                <Button className={styles.buttonHeader} onClick={() => {openAuthModal()}} >
                    <Person />
                </Button>
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
        <Modal isOpen = {isAuthOpen}  closeModal = {closeAuthModal} container={document.getElementById("modal")!}>
            <Auth/>
        </Modal>
    </Container>
}

export default Header;