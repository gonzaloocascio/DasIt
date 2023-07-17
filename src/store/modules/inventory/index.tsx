import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { InventoryState, ProductType, SetWatchListParams } from './types';

const initialState: InventoryState = {
  productList: [],
  categoryList: [],
  watchList: [
    {
      productId: 1,
      purchased: false,
    },
    {
      productId: 2,
      purchased: true,
    },
  ],
};

const inventoryReducer = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    setProductsApi: (state, action: PayloadAction<ProductType[]>) => {
      const products = action.payload;
      state.productList = products;
      const categories: string[] = [
        ...new Set(products.map(product => product.category)),
      ];
      state.categoryList = ['All'].concat(categories);
    },
    toggleWatchList: (state, action: PayloadAction<SetWatchListParams>) => {
      const index = state.watchList.findIndex(
        watch => watch.productId === action.payload.productId,
      );

      if (index !== -1) {
        state.watchList.splice(index, 1);
      } else {
        state.watchList.push({
          productId: action.payload.productId,
          purchased: false,
        });
      }
    },
    setPurchased: (state, action: PayloadAction<SetWatchListParams>) => {
      const index = state.watchList.findIndex(
        watch => watch.productId === action.payload.productId,
      );

      if (index !== -1) {
        state.watchList.splice(index, 1);
        state.watchList.push({
          productId: action.payload.productId,
          purchased: true,
        });
      }
    },
  },
});

export const { setProductsApi, toggleWatchList, setPurchased } =
  inventoryReducer.actions;
export default inventoryReducer.reducer;
