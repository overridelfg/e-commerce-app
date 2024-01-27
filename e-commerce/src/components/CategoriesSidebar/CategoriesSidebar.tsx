import { Box, Typography } from "@mui/material";
import { useHttp } from "../../hooks/useHttp";
import { IProduct } from "../../types/IProduct";

interface CategoriesSidebarProps {
    
}
 
const catrogires = [
    "Games",
    "Electronics",
    "Music",
    "Computers",
    "Tools",
    "Movies",
    "Baby",
    "Beauty",
    "Health",
    "Industrial",
    "Garden",
    "Kitchen"
];

const CategoriesSidebar: React.FC<CategoriesSidebarProps> = (props) => {

    const {} = props;

    const { request } = useHttp();
    

    // const getProductsByCategory = (category: string) => {
    //     request(
    //         `products/categories/${category}`,
    //         "get"
    //     );

    // }

    return <Box sx={{display: "flex", flexDirection: "column", flexShrink: 0, width: "220px", backgroundColor: "#191f25", padding: "16px 24px"}}>
        <Typography variant="h5" color={"white"} sx={{marginBottom: ".4rem"}}>Categories: </Typography>
        {catrogires.map((category: string, id: number) => {
            return (
                <Typography
                variant = "h6"
                color={"white"}
                sx={{wordWrap: "break-word", marginLeft: ".4rem"}}
                key={id}
                >
                    {category}
                </Typography>
            )
        })}
    </Box>
}
 
export default CategoriesSidebar;