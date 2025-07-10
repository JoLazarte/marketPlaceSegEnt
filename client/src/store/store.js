import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './slices/productsSlice';
//import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import pagoReducer from './slices/pagoSlice';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    auth: authReducer,
    pago: pagoReducer,
    //cart: cartReducer,
  },
  devTools: true, 
});

export default store;