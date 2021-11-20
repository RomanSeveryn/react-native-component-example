import React, {useState} from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
      initialRouteName="Screen_A"
      hideStatusBar={true}
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#0080ff'
        },
        headerTintColor: '#ffffff'
      }
    
    }
      >
        <Drawer.Screen
        name="Screen_A"
        component={ScreenA}
        options={{
          title: 'Screen_A Title',
          drawerIcon: () => {
            <FontAwesome5
            name='home'
            />
          }
        }}
        initialParams={{itemName: 'Item', itemId: 42 }}
          />
        <Drawer.Screen
        name="Screen_B"
        component={ScreenB}/>
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
