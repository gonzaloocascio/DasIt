import { createSlice } from '@reduxjs/toolkit';
import { CoreState } from './types';

const initialState: CoreState = {
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
