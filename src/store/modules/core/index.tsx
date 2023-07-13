import { createSlice } from '@reduxjs/toolkit';
import { coreState } from './types';

const initialState: coreState = {
  splash: true,
  isLogged: false,
};

const coreReducer = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setSplash: (state, action) => {
      state.splash = action.payload;
    },
    setIsLogged: (state, action) => {
      state.isLogged = action.payload;
    },
  },
});

export const { setSplash, setIsLogged } = coreReducer.actions;
export default coreReducer.reducer;
