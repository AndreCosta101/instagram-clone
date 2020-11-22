import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import Routes from './routes';
import { NavigationContainer } from '@react-navigation/native';


function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Routes />
    </NavigationContainer>
  );
}

export default App;