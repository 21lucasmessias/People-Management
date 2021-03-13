import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { expo as appName } from './app.json';
import Routes from './src/routes';

export default function App() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName.name, () => App);