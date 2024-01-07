import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";


interface IReviewContext {
    isReviewDialogOpen: boolean,
    openReviewDialog: () => void,
    closeReviewDialog: () => void,
}

const ReviewContext = createContext<IReviewContext>({
    isReviewDialogOpen: false,
    openReviewDialog: () => {},
    closeReviewDialog: () => {}
});

export function useReview(){
    return useContext(ReviewContext);
}

interface SidebarProviderProps {
    children? : ReactNode;
}

export const ReviewProvider: React.FC<SidebarProviderProps> = ({ children }) => {

    const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);

    const openReviewDialog = () => {setIsReviewDialogOpen(true)};
    const closeReviewDialog = () => {setIsReviewDialogOpen(false)};

    return (
        <ReviewContext.Provider value={{isReviewDialogOpen, openReviewDialog, closeReviewDialog}}>
            {children}
        </ReviewContext.Provider>
    );
}