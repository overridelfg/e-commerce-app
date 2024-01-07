import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";


interface ICartContext {
    isCartOpen: boolean,
    openCart: () => void,
    closeCart: () => void,
}

const CartContext = createContext<ICartContext>({
    isCartOpen: false,
    openCart: () => {},
    closeCart: () => {}
});

export function useCart(){
    return useContext(CartContext);
}

interface SidebarProviderProps {
    children? : ReactNode;
}

export const CartProvider: React.FC<SidebarProviderProps> = ({ children }) => {

    const [isCartOpen, setIsOpen] = useState(false);

    const openCart = () => {setIsOpen(true)};
    const closeCart = () => {setIsOpen(false)};

    return (
        <CartContext.Provider value={{isCartOpen, openCart, closeCart}}>
            {children}
        </CartContext.Provider>
    );
}