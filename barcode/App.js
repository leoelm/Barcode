import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { View, Text } from 'react-native';

import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Start from './src/Start';
import Home from './src/Home';
import Inventory from './src/Inventory';
import DrawerContent from './src/Drawer';


const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerStack () {
  return (
        <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={Home} 
          options={{headerShown: false}}/>
          <Drawer.Screen name="Inventory" component={Inventory}
          options={{headerShown:true}} />
        </Drawer.Navigator>
  )
}

export default class App extends Component {
  render() {
    return(
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={Start}
          options={{headerShown: false}} />
          <Stack.Screen name="DrawerStack" component={DrawerStack}
          options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}