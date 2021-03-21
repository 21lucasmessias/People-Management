import React from 'react';
import { StatusBar } from 'expo-status-bar';

import 'react-native-gesture-handler';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createSharedElementStackNavigator } from 'react-navigation-shared-element';

import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import List from './pages/List/List';
import DetailScreen from './pages/DetailScreen/DetailScreen';
import MyTabBar from './components/MyTabBar/MyTabBar';
import { iStack } from './GraphQL/apolloComponents';
import ListContextProvider from './contexts/ListContext';
import AlterContextProvider from './contexts/AlterContext';

const Stack = createSharedElementStackNavigator<iStack>();

const StackNavigator = () => (
  <AlterContextProvider>
    <Header title='Our People' />
    <Stack.Navigator headerMode='none'>
      <Stack.Screen name='List' component={List} />
      <Stack.Screen
        name='Details'
        component={DetailScreen}
        sharedElementsConfig={(route) => {
          const { person } = route.params;
          return [{
            id: `${person.cpf}.image`
          }];
        }}
        options={() => ({
          cardStyleInterpolator: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              }
            }
          },
          gestureEnabled: false,
          transitionSpec: {
            open: { animation: "timing", config: { duration: 700 } },
            close: { animation: "timing", config: { duration: 700 } },
          }
        })}
      />
    </Stack.Navigator>
  </AlterContextProvider>
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
    <ListContextProvider>
      <StatusBar style="auto" />
      <NavigationContainer >
        <BottomTabNavigator />
      </NavigationContainer>
    </ListContextProvider>
  );
}


export default Routes;