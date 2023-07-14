import * as React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { navigationRef } from './rootNavigation';
import { withTheme } from 'styled-components';
import { ThemeProps } from '@src/theme/types';
import { RootStackScreen } from './Root';
import { appTheme } from '@src/theme';

type Props = {
  readonly theme: ThemeProps;
};

const Routes = ({ theme }: Props) => {
  const NavigationTheme = {
    ...DefaultTheme,
    ...theme,
    ...appTheme,
  };

  return (
    <NavigationContainer ref={navigationRef} theme={NavigationTheme}>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default withTheme(Routes);
