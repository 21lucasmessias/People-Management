import React from 'react';
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from './pages/Home/Home';
import Register from './pages/Register/Register';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

const Routes: React.FC = () => {
  return (
    <>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Navigator shifting>
          <Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="home" color={color} size={26} />
              ),
              tabBarColor: "#5E0A0B"
            }}
          />
          <Screen
            name="Register"
            component={Register}
            options={{
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="account" color={color} size={26} />
              ),
              tabBarColor: "#941A1C"
            }}
          />
        </Navigator>
      </NavigationContainer>
    </>
  );
}

export default Routes;