import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/Home';

// const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={Home} 
          options={{headerShown: false}}/>
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}