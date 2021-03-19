import React from 'react';
import { StatusBar } from 'expo-status-bar';

import 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import List from './pages/List/List';
import DetailScreen from './pages/DetailScreen/DetailScreen';
import MyTabBar from './components/MyTabBar/MyTabBar';
import { iStack, iPerson } from './GraphQL/apolloComponents';

enableScreens();

const Stack = createSharedElementStackNavigator<iStack>();

const StackNavigator = () => (
  <>
    <Header title='Our People' />
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='List' component={List} />
      <Stack.Screen
        name='Details'
        component={DetailScreen}
        sharedElementsConfig={(route) => {
          const { person } = route.params;
          return [{
            id: `photo${(person as iPerson).cpf}`,
            animation: 'fade',
          },
          {
            id: `name${(person as iPerson).cpf}`,
            animation: 'fade-in',
          },
          {
            id: `age${(person as iPerson).cpf}`,
            animation: 'fade-in',
          }
          ];
        }}
        options={() => ({
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              }
            }
          },

        })}
      />
    </Stack.Navigator>
  </>
)

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
        component={StackNavigator}
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
    <>
      <StatusBar style="auto" />
      <NavigationContainer >
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
}


export default Routes;