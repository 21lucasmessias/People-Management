import * as React from 'react';
import { AppRegistry, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { expo as appName } from './app.json';
import Routes from './src/routes';

import {
  useFonts,
  RobotoMono_400Regular,
} from '@expo-google-fonts/roboto-mono';

export default function App() {
  let [fontsLoaded] = useFonts({
    RobotoMono_400Regular,
  });

  if (!fontsLoaded) {
    return <View />
  } else {
    return (
      <PaperProvider>
        <Routes />
      </PaperProvider>
    );
  }
}

AppRegistry.registerComponent(appName.name, () => App);