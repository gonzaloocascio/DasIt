import { createSlice } from '@reduxjs/toolkit';
import { userState } from './types';

const initialState: userState = {
  isLogged: false,
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
