import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Home from '../../../pages/Home/Home';
import Register from '../../../pages/Register/Register';
import StackNavigator from '../Stack/Stack';
import TabBarCustomButton from './TabBarCustomButton/TabBarCustomButton';
import { height } from '../../../../assets/dimensions';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator: React.FC = () => {
  return (
    <BottomTab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: 'rgb(244,244,244)',
          elevation: 0,
          bottom: 0,
          borderTopWidth: 0,
          height: height * 0.07
        }
      }}>

      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="home" color={focused ? '#476A6F' : color} size={24} />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton {...props} />
          )
        }} />

      <BottomTab.Screen
        name="List"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="format-list-numbered" color={focused ? '#476A6F' : color} size={24} />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton {...props} />
          )
        }}
      />

      <BottomTab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons name="account" color={focused ? '#476A6F' : color} size={24} />
          ),
          tabBarButton: (props) => (
            <TabBarCustomButton {...props} />
          )
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BottomTabNavigator;

