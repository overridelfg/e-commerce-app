import { Box, Typography } from "@mui/material";
import { IReview } from "../../models/IReview";
import Image from "../../ui/Image/Image";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Rating from "../../ui/Rating/Rating";

interface CommentProps {
    review: IReview
}
 
const Comment: React.FC<CommentProps> = ({ review }) => {

    return ( 
        <Box sx={{display: "flex", flexDirection: "column", gap: "1rem", color: "white", padding: "1.5rem 0", borderBottom: "1px solid white"}}>
            <Box sx={{display: "flex", gap: "1rem"}}>
                <AccountCircleIcon sx={{width: "60px", height: "60px"}}/>
                <Box sx={{display: "flex", flexDirection: "column", gap: ".4rem"}}>
                    <Typography>{review.username}</Typography>
                    <Box sx={{display: "flex", gap: "0.4rem"}}>
                        <Rating value={review.rating} color="white" readOnly/>
                        <Typography>{review.createdAt}</Typography>
                    </Box>
                </Box>
            </Box>
            <Typography>{review.comment}</Typography>
        </Box>
     );
}
 
export default Comment;