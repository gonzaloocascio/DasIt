import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { inventoryState, Product } from './types';

const initialState: inventoryState = {
  products: [],
};

const inventoryReducer = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setProductsApi: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProductsApi } = inventoryReducer.actions;
export default inventoryReducer.reducer;
