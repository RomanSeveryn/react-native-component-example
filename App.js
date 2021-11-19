import React, {useState} from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// const Tab = createBottomTabNavigator();
const Tab = createMaterialBottomTabNavigator();


export default function App() {

  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Screen_A') {
              iconName = 'car';
              size = focused ? 25 : 30;
            } else if (route.name === 'Screen_B') {
              iconName = 'settings';
              size = focused ? 25 : 30;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        barStyle={{backgroundColor: '#694fad'}}
      >
        <Tab.Screen
        name="Screen_A"
        component={ScreenA}
        options={{tabBarBadge: 3}}
          />
        <Tab.Screen
        name="Screen_B"
        component={ScreenB}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
