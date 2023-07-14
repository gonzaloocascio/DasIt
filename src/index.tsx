import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { store, persistor } from './store';
import { Provider as PaperProvider } from 'react-native-paper';
import { ThemeProvider } from 'styled-components';
import { appTheme } from '@src/theme';
import App from './App';

const Index = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={appTheme}>
          <ThemeProvider theme={appTheme}>
            <SafeAreaProvider>
              <App />
            </SafeAreaProvider>
          </ThemeProvider>
        </PaperProvider>
      </PersistGate>
    </Provider>
  );
};

export default Index;
