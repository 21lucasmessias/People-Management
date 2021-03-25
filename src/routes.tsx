import React from 'react';
import { StatusBar } from 'expo-status-bar';

import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import ListContextProvider from './contexts/ListContext';
import BottomTab from './components/Routes/BottomTab/BottomTab';

const Routes: React.FC = () => {
  return (
    <ListContextProvider>
      <StatusBar style="auto" />
      <NavigationContainer >
        <BottomTab />
      </NavigationContainer>
    </ListContextProvider>
  );
}


export default Routes;