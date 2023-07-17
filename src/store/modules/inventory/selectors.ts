import { createSelector } from 'reselect';
import { RootState } from '@store/index';
import { InventoryState } from './types';

const sistemData = (state: RootState) => state.inventory;

const selStore = createSelector(
  sistemData,
  (stateSistem: InventoryState) => stateSistem,
);

const getCategories = createSelector(
  sistemData,
  (stateSistem: InventoryState) => stateSistem.categoryList,
);

const getProducts = createSelector(
  sistemData,
  (stateSistem: InventoryState) => stateSistem.productList,
);

const getWatchList = createSelector(
  sistemData,
  (stateSistem: InventoryState) => stateSistem.watchList,
);

export { selStore, getCategories, getProducts, getWatchList };
