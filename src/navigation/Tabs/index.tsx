import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InventarioStackScreen from '../InventarioStack';
import WatchList from '@src/screens/WatchList';
import Profile from '@src/screens/Profile';
import Icon from 'react-native-vector-icons/FontAwesome5';
const Tab = createBottomTabNavigator();

const AppTabsScreen = () => {
  return (
    <Tab.Navigator
      initialRouteName="Shop"
      screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="WatchList"
        component={WatchList}
        options={{
          tabBarLabel: 'Watchlist',
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" color={color} size={size} solid />
          ),
        }}
      />
      <Tab.Screen
        name="Shop"
        component={InventarioStackScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="shopping-cart" color={color} size={size} solid />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" color={color} size={size} solid />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppTabsScreen;
