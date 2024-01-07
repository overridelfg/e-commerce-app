import { Box, Rating, Typography } from "@mui/material";
import { Review } from "../../models/Review";
import Image from "../../ui/Image/Image";

interface CommentProps {
    review: Review
}
 
const Comment: React.FC<CommentProps> = ({ review }) => {

    return ( 
        <Box sx={{display: "flex", flexDirection: "column", gap: "1rem", color: "white", padding: "1.5rem 0", borderBottom: "1px solid white"}}>
            <Box sx={{display: "flex", gap: "1rem"}}>
                <Box sx={{width: "60px", height: "60px", backgroundColor: "white", borderRadius: "50%"}}>
                    <Image src="https://m.media-amazon.com/images/I/81M2m0Eh2vL._AC_UY436_FMwebp_QL65_.jpg" borderRadius="50%"/>
                </Box>
                <Box sx={{display: "flex", flexDirection: "column", gap: ".4rem"}}>
                    <Typography>{review.user}</Typography>
                    <Box sx={{display: "flex", gap: "0.4rem"}}>
                        <Rating value={review.rating} color="white" readOnly/>
                        <Typography>{review.date}</Typography>
                    </Box>
                </Box>
            </Box>
            <Typography>{review.comment}</Typography>
        </Box>
     );
}
 
export default Comment;