import * as React from 'react';
// import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './rootNavigation';
import { RootStackScreen } from './Root';

// import { ThemeProps } from '../store/modules/theme/types';
// import { withTheme } from 'styled-components';

// type Props = {
//   readonly theme: ThemeProps;
// };

// const Routes = ({ theme }: Props) => {
const Routes = () => {
  // const MyTheme = {
  //   ...DefaultTheme,
  //   colors: {
  //     ...DefaultTheme.colors,
  //     background: theme.PRIMARY_COLOR,
  //     primary: theme.PRIMARY_COLOR,
  //     card: theme.PRIMARY_COLOR,
  //     border: theme.PRIMARY_COLOR,
  //   },
  // };

  return (
    // <NavigationContainer theme={MyTheme} ref={navigationRef}>
    <NavigationContainer ref={navigationRef}>
      <RootStackScreen />
    </NavigationContainer>
  );
};

export default Routes;
// export default withTheme(Routes);
