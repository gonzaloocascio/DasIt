import { AppThunk } from '@src/store';
import axios from 'axios';
import { setProductsApi, toggleWatchList } from '@store/modules/inventory';
import { setSplash } from '../core';

export const getProductsApi = (): AppThunk => async dispatch => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    dispatch(setProductsApi(response.data.products));
    setTimeout(() => {
      dispatch(setSplash(false));
    }, 1000);
  } catch (error) {
    console.error('Error al obtener los productos de la API:', error);
  }
};

export const updateWatchList =
  (productId: number): AppThunk =>
  dispatch => {
    dispatch(toggleWatchList({ productId }));
  };
