import React from 'react';

import { createSharedElementStackNavigator } from 'react-navigation-shared-element';
import AlterContextProvider from '../../../contexts/AlterContext';

import { iStack } from '../../../GraphQL/apolloComponents';
import DetailScreen from '../../../pages/DetailScreen/DetailScreen';
import List from '../../../pages/List/List';
import Header from '../../Header/Header';

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

export default StackNavigator;