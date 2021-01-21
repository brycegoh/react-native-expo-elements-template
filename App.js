import React from 'react';
import {View} from 'react-native'

// css
import {customStyles} from './layoutStyle';

// components
import {
  Home,
  ScreenOne
} from './components/index.js';

// react native elements
import { Button, ThemeProvider, Text } from 'react-native-elements';

// react navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// firebase firestore
import firebaseConfig from './firebase'
import * as firebase from 'firebase'
import 'firebase/firestore';

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ScreenOne" component={ScreenOne} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
