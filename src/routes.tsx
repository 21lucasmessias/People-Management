import React from 'react';
import ListContextProvider from './contexts/ListContext';

import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import List from './pages/List/List';
import DetailScreen from './pages/DetailScreen/DetailScreen';
import MyTabBar from './components/MyTabBar/MyTabBar';


const BottomTab = createBottomTabNavigator();
const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator tabBar={(props) => <MyTabBar {...props} />} >
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />

      <BottomTab.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="format-list-numbered" color={color} size={24} />
          ),
        }}
      />

      <BottomTab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={24} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

const Routes: React.FC = () => {
  return (
    <ListContextProvider>
      <StatusBar style="auto" />
      <NavigationContainer >
        <BottomTabNavigator />
      </NavigationContainer>
    </ListContextProvider>
  );
}


export default Routes;