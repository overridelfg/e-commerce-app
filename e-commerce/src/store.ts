import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './components/Cart/cartSlice';
import filtersReducer from './store/filters/filtersSlice'
import { userSlice } from './store/user/user.slice';
import { productSlice } from './store/products/products.slice';

const store = configureStore({
    reducer: {cartReducer, filtersReducer, user: userSlice.reducer, products: productSlice.reducer},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== 'production'
});

export type RootState = ReturnType<typeof store.getState>

export default store;