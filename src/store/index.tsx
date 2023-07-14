import {
  configureStore,
  Action,
  Dispatch,
  combineReducers,
} from '@reduxjs/toolkit';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import coreReducer from '@store/modules/core';
import inventoryReducer from '@store/modules/inventory';
import userReducer from '@store/modules/user';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const rootReducer = combineReducers({
  core: coreReducer,
  inventory: inventoryReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(thunk),
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = ThunkDispatch<RootState, unknown, Action<string>> &
  Dispatch;

export { store, persistor };
