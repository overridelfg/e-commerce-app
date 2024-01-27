import { ReactNode, createContext, useContext, useState } from "react";
import { IReview } from "../types/IReview";


interface IReviewContext {
    reviews: IReview[];
    updateReviews: (reviews: IReview[]) => void;
    reviewsCount: number;
}

interface IReviewModalContext {
    isReviewDialogOpen: boolean,
    openReviewDialog: () => void,
    closeReviewDialog: () => void,
}

const ReviewContext = createContext<IReviewContext>({
    reviews: [],
    updateReviews: ([]) => {},
    reviewsCount: 0
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
    const [reviewsCount, setReviewsCount] = useState<number>(0);
    const updateReviews = (updatedReviews: IReview[]) => {
        setReviews(updatedReviews);
        setReviewsCount(updatedReviews.length);
    };

    return (
        <ReviewContext.Provider 
        value={{
            reviews,
            updateReviews,
            reviewsCount}}>
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