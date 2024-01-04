import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/Cart/cartSlice';

const store = configureStore({
    reducer: {cartReducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>

export default store;