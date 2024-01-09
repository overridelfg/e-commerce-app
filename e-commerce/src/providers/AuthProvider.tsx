import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";


interface IAuthContext {
    isAuthOpen: boolean,
    openAuthModal: () => void,
    closeAuthModal: () => void,
}

const AuthContext = createContext<IAuthContext>({
    isAuthOpen: false,
    openAuthModal: () => {},
    closeAuthModal: () => {}
});

export function useAuth(){
    return useContext(AuthContext);
}

interface AuthModalProviderProps {
    children? : ReactNode;
}

export const AuthModalProvider: React.FC<AuthModalProviderProps> = ({ children }) => {

    const [isAuthOpen, setIsAuthOpen] = useState(false);

    const openAuthModal = () => {setIsAuthOpen(true)};
    const closeAuthModal = () => {setIsAuthOpen(false)};

    return (
        <AuthContext.Provider value={{isAuthOpen, openAuthModal, closeAuthModal}}>
            {children}
        </AuthContext.Provider>
    );
}