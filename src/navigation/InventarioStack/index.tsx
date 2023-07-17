import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductList from '@screens/Productos';
import ProductDetail from '@src/screens/ProductDetail';

const InventarioStack = createNativeStackNavigator();

const InventarioStackScreen = () => {
  return (
    <InventarioStack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: false }}>
      <InventarioStack.Screen name="Products" component={ProductList} />
      <InventarioStack.Screen name="Detail" component={ProductDetail} />
    </InventarioStack.Navigator>
  );
};

export default InventarioStackScreen;
