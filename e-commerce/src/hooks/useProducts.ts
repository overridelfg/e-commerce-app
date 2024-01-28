import { useTypedSelector } from "./useTypedSelector";

export const useProducts = () => useTypedSelector((state => state.products));