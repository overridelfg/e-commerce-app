import { Box, Typography } from "@mui/material";

interface CategoriesSidebarProps {
    
}
 
const data = [
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
    "Garden"
];

const CategoriesSidebar: React.FC<CategoriesSidebarProps> = (props) => {

    const {} = props;

    return <Box sx={{display: "flex", flexDirection: "column", flexShrink: 0, width: "220px", backgroundColor: "#191f25", padding: "16px 24px"}}>
        <Typography variant="h5" color={"white"} sx={{marginBottom: ".4rem"}}>Categories: </Typography>
        {data.map((category) => {
            return (
                <Typography variant = "h6" color={"white"} sx={{wordWrap: "break-word", marginLeft: ".4rem"}}>
                    {category}
                </Typography>
            )
        })}
    </Box>
}
 
export default CategoriesSidebar;