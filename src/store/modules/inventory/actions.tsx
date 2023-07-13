import { AppThunk } from '@src/store';
import axios from 'axios';
import { setProductsApi } from '@store/modules/inventory';
import { setSplash } from '../core';

export const getProductsApi = (): AppThunk => async dispatch => {
  try {
    const response = await axios.get('https://dummyjson.com/products');
    dispatch(setProductsApi(response.data));
    dispatch(setSplash(false));
  } catch (error) {
    console.error('Error al obtener los productos de la API:', error);
  }
};
