import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Loading from '@src/screens/Loading';

// import InventarioStackScreen from '../InventarioStack';
// import VentasStackScreen from '../VentasStack';
// import Perfil from '@screens/Perfil';

const Tab = createBottomTabNavigator();

const AppTabsScreen = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Shop" component={Loading} />
      {/* <Tab.Screen name="Ventas" component={VentasStackScreen} /> */}
      {/* <Tab.Screen name="Inventario" component={InventarioStackScreen} /> */}
      {/* <Tab.Screen name="Perfil" component={Perfil} /> */}
    </Tab.Navigator>
  );
};

export default AppTabsScreen;
