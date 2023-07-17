import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@src/store';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeConsumer } from 'styled-components';
import AppTabsScreen from '@navigation/Tabs';
import Loading from '@screens/Loading';
import Login from '@src/screens/Login';
// import { AppTabsScreen } from '../Tabs';
// import { AuthStackScreen } from '../Auth';

const RootStack = createNativeStackNavigator();

const RootStackScreen = () => {
  const { splash } = useSelector((state: RootState) => state?.core);
  const { isLogged } = useSelector((state: RootState) => state?.user);

  const insets = useSafeAreaInsets();
  const mainWrapper = {
    flex: 1,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
    paddingLeft: insets.left,
    paddingRight: insets.right,
  };

  return (
    <ThemeConsumer>
      {() => (
        <RootStack.Navigator
          screenOptions={{ headerShown: false, contentStyle: mainWrapper }}>
          {splash ? (
            <RootStack.Screen name="Loading" component={Loading} />
          ) : isLogged ? (
            <RootStack.Screen name="AppTabsScreen" component={AppTabsScreen} />
          ) : (
            <RootStack.Screen name="Login" component={Login} />
          )}
        </RootStack.Navigator>
      )}
    </ThemeConsumer>
  );
};
// );
// };

export { RootStackScreen };
