import { Box, Typography } from "@mui/material";
import ReactDOM from "react-dom";
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from "react";

interface ModalProps {
    container: HTMLElement
    isOpen: boolean
    closeSidebar() : void
    width?: string
    height? : string
    sidebarHeaderTitle?: string
    children?: React.ReactNode
}
 
const Modal: React.FC<ModalProps> = (props) => {

    const { container, children, isOpen, closeSidebar, sidebarHeaderTitle = "", width = "450px", height = "450px" } = props;


    const ref = useRef<HTMLDivElement>(null);


    const closeSidebarHandler = (e: React.MouseEvent<HTMLElement>) => {
        if(!ref.current?.contains(e.target as HTMLElement)) {
            closeSidebar();
        }
    }

    return ReactDOM.createPortal(
        <Box
        onClick = {(e : React.MouseEvent<HTMLElement>) => {closeSidebarHandler(e)}} 
        sx={{
            zIndex: 100,
            width: "100%",
            height: "100svh",
            position: "fixed",
            top: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            opacity: isOpen ? 1 : 0,
            visibility: isOpen ? "visible" : "hidden"}}>
            <Box 
            ref={ref}
            sx={{
                width: width, 
                height: height,
                backgroundColor: "var(--color-surface-mixed-100)",
                position: "absolute",
                top: "50%",
                transform: "translate(-50%, -50%)",
                left: "50%",
                overflow: "auto",
                padding: "1rem"}}
            >
                <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem"}}>
                    <Typography variant = {"h4"} color = {"white"}>{sidebarHeaderTitle}</Typography>
                    <Box 
                        sx={{width: "35px", height: "35px"}}
                        onClick = {() => {closeSidebar()}}>
                        <CloseIcon sx={{width: "100%", height: "100%", color: "white"}}/>
                    </Box>
                </Box>
                {children}
            </Box>
        </Box>,
        container
    )
}
 
export default Modal;