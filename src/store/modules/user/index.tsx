import { createSlice } from '@reduxjs/toolkit';
import { UserState } from './types';

export const initialState: UserState = {
  idUser: 0,
  Rol: '',
  Profile: {
    Usuario: '',
    Nombre: '',
    Apellido: '',
    Fecha: '',
    Tel: '',
    Email: '',
    Direccion: '',
    Localidad: '',
    Estado: '',
  },
  isLogged: undefined,
  requestErrorMsg: { title: '', text: '' },
};

const userReducer = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export const { setIsLogged } = userReducer.actions;
export default userReducer.reducer;
