import { Box, Typography } from "@mui/material";
import Comment from "../../widgets/Comment/Comment";
import Modal from "../../ui/Modal/Modal";
import { useState } from "react";
import { useReview } from "../../providers/ReviewProvider";
import { IReview } from "../../models/IReview";
import ReviewForm from "./ReviewForm/ReviewForm";

interface ReviewProps {
    reviews: IReview[];
}
 
const Review: React.FC<ReviewProps> = ({reviews}) => {

    const { closeReviewDialog, openReviewDialog, isReviewDialogOpen } = useReview();

    return ( 
        <Box sx={{display: "flex", flexDirection: "column", gap: "2rem"}}>
            <Typography sx={{fontSize: "1.4rem", color: "white"}}>Reviews: </Typography>
            <Typography
            sx={{fontSize: "1.1rem", color: "white", cursor: "pointer"}}
            onClick = {openReviewDialog}
            >
                Leave comment</Typography>
            {reviews.map((review, id) => {
                return(
                    <Comment key={id} review={review}/>
                )
            })}
            <Modal
            isOpen = {isReviewDialogOpen}
            closeModal={closeReviewDialog}
            container={document.getElementById("modal")!}
             >
                <ReviewForm/>
             </Modal>
        </Box>
     );
}
 
export default Review;