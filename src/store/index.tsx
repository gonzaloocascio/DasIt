import { configureStore, Action, Dispatch } from '@reduxjs/toolkit';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import coreReducer from '@store/modules/core';

const store = configureStore({
  reducer: {
    core: coreReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>> &
  Dispatch;

export default store;
