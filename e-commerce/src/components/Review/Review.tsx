import { Box, Typography } from "@mui/material";
import { Comment } from "../../widgets";
import { Modal } from "../../ui";
import { useEffect, useRef } from "react";
import { useModalReview, useReview } from "../../providers/ReviewProvider";
import ReviewForm from "./ReviewForm";

interface ReviewProps {
    productId: string;
}
 
const Review: React.FC<ReviewProps> = ({productId}) => {

    const { reviews } = useReview();
    const {closeReviewDialog, openReviewDialog, isReviewDialogOpen} = useModalReview();  

    return ( 
        <Box sx={{display: "flex", flexDirection: "column", gap: "2rem"}}>
            <Typography sx={{fontSize: "1.4rem", color: "white"}}>Reviews: </Typography>
            <Typography
            sx={{fontSize: "1.1rem", color: "var(--color-primary-100)", cursor: "pointer"}}
            onClick = {openReviewDialog}
            >
                Leave comment</Typography>
            {reviews.map((review, id) => {
                return(
                    <Comment key={id} review={review}/>
                )
            })}
            <Modal
            sidebarHeaderTitle = {"Leave comment"}
            isOpen = {isReviewDialogOpen}
            closeModal={closeReviewDialog}
            container={document.getElementById("modal")!}
            height="auto"
             >
                <ReviewForm productId = {productId}/>
             </Modal>
        </Box>
     );
}
 
export default Review;