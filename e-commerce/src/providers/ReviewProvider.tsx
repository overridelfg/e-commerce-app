import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";
import { IReview } from "../models/IReview";


interface IReviewContext {
    reviews: IReview[],
    updateReviews: (reviews: IReview[]) => void
}

interface IReviewModalContext {
    isReviewDialogOpen: boolean,
    openReviewDialog: () => void,
    closeReviewDialog: () => void,
}

const ReviewContext = createContext<IReviewContext>({
    reviews: [],
    updateReviews: ([]) => {}
});

const ReviewModalContext = createContext<IReviewModalContext>({
    isReviewDialogOpen: false,
    openReviewDialog: () => {},
    closeReviewDialog: () => {},
});

export function useReview(){
    return useContext(ReviewContext);
}

export function useModalReview(){
    return useContext(ReviewModalContext);
}


interface SidebarProviderProps {
    children? : ReactNode;
}

export const ReviewProvider: React.FC<SidebarProviderProps> = ({ children }) => {

    const [reviews, setReviews] = useState<IReview[]>([]);
    const updateReviews = (updatedReviews: IReview[]) => {setReviews(updatedReviews)};

    return (
        <ReviewContext.Provider 
        value={{
            reviews,
            updateReviews}}>
            {children}
        </ReviewContext.Provider>
    );
}

export const ReviewModalProvider: React.FC<SidebarProviderProps> = ({ children }) => {

    const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);

    const openReviewDialog = () => {setIsReviewDialogOpen(true)};
    const closeReviewDialog = () => {setIsReviewDialogOpen(false)};

    return (
        <ReviewModalContext.Provider 
        value={{
            isReviewDialogOpen,
            openReviewDialog,
            closeReviewDialog}}>
            {children}
        </ReviewModalContext.Provider>
    );
}