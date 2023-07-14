import { createSlice } from '@reduxjs/toolkit';
import { coreState } from './types';

const initialState: coreState = {
  splash: true,
};

const coreReducer = createSlice({
  name: 'core',
  initialState,
  reducers: {
    setSplash: (state, action) => {
      state.splash = action.payload;
    },
  },
});

export const { setSplash } = coreReducer.actions;
export default coreReducer.reducer;
