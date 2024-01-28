import { useTypedSelector } from "./useTypedSelector";

export const useAuthSelector = () => useTypedSelector((state => state.user));