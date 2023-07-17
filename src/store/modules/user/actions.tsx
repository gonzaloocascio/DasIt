import { AppThunk } from '@src/store';
// import axios from 'axios';
import { setIsLogged } from '@store/modules/user';
import { UserLogin } from './types';

export const loginRequest =
  ({ user, password }: UserLogin): AppThunk =>
  async dispatch => {
    try {
      // const response = await axios.get('https://dummyjson.com/products');
      dispatch(setIsLogged(true));
    } catch (error) {
      console.error('Error al obtener Loguear Ususario:', error);
    }
  };
