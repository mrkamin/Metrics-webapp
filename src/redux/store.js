import { configureStore } from '@reduxjs/toolkit';
import stockReducer from './Stock-Screener/stockScreener';

const store = configureStore({
  reducer: {
    stockMaterials: stockReducer,
  },
});

export default store;
