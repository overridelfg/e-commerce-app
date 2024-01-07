import { Box, Typography } from "@mui/material";
import Comment from "../../widgets/Comment/Comment";
import Modal from "../../ui/Modal/Modal";
import { useState } from "react";
import { useReview } from "../../providers/ReviewProvider";

const data = [
    {
        id: 1,
        comment: "This is a great introduction to MUI styling concepts. The date picker code needs to be updated for the latest API. Layout options are confusing for beginners. It's not clear when I should use a Grid, Container, Stack, FormGroup, FormControl, etc. to align components. It's also not clear at which level I should apply margins, padding etc.: at the component level? Container? The date picker and autocomplete components are too complicated to be used as examples. It would be better to keep the code short and focus on cleanly aligning components to create a polished look.",
        user: "Name1",
        rating: 4,
        date: "2017-12-23"
    },
    {
        id: 2,
        comment: "Sehr praktisch orientierte Vorgehensweise und gut strukturiert. Wie viele Kurse aus dem UI-Umfeld nicht ganz aktuell und deshalb sehen meine eigenen Ergebnisse manchmal nicht so aus, wie in dem Kurs",
        user: "Name2",
        rating: 5,
        date: "2017-12-23"
    }
]


interface ReviewProps {
    
}
 
const Review: React.FC<ReviewProps> = () => {


    const { closeReviewDialog, openReviewDialog, isReviewDialogOpen } = useReview();

    return ( 
        <Box sx={{display: "flex", flexDirection: "column", gap: "2rem"}}>
            <Typography sx={{fontSize: "1.4rem", color: "white"}}>Reviews: </Typography>
            <Typography
            sx={{fontSize: "1.1rem", color: "white", cursor: "pointer"}}
            onClick = {openReviewDialog}
            >
                Leave comment</Typography>
            {data.map((review) => {
                return(
                    <Comment key={review.id} review={review}/>
                )
            })}
            <Modal
            isOpen = {isReviewDialogOpen}
            closeSidebar={closeReviewDialog}
            container={document.getElementById("modal")!}
             >
                <Typography color={"white"}>HDHSFISF</Typography>
             </Modal>
        </Box>
     );
}
 
export default Review;