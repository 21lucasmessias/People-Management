import React from 'react';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import ListContextProvider from './contexts/ListContext';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import List from './pages/List/List';
import MyTabBar from './components/MyTabBar/MyTabBar';

const { Navigator, Screen } = createBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <ListContextProvider>
      <StatusBar style="auto" />
      <NavigationContainer >
        <Navigator tabBar={(props) => <MyTabBar {...props} />} >

          <Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={24} />
              ),
            }}
          />
          <Screen
            name="List"
            component={List}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="format-list-numbered" color={color} size={26} />
              ),
            }}
          />

          <Screen
            name="Register"
            component={Register}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
            }}
          />

        </Navigator>
      </NavigationContainer>
    </ListContextProvider>
  );
}

export default Routes;