import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Image } from 'react-native';
import logo from './assets/instagram.png';

import Feed from './pages/Feed';

const Stack = createStackNavigator();

const Routes = () => (
  <Stack.Navigator
    screenOptions={
      {
        headerShown: true,
        cardStyle: { backgroundColor: '#ffff' },
        headerLayoutPreset: 'center',
        headerTitle: < Image source={logo} />,
        headerStyle: {
          backgroundColor: '#f5f5f5'
        }
      }
    }

  >
    <Stack.Screen name="Feed" component={Feed} />
  </Stack.Navigator >
)


export default Routes;