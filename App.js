import React, {useState} from 'react';
import { Button, Pressable, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import ScreenA from './ScreenA';
import ScreenB from './ScreenB';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
   text: {
     fontSize: 40,
     fontWeight: 'bold',
     margin: 10
   }
})

const Tab = createBottomTabNavigator();


export default function App() {
  const [state, setState] = useState(1)
  const awesomeFunc = () => {
    setState((prev) => prev + 1)
  }
  function ScreenA({navigation}) {
  
    const onPressHandler = () => {
      navigation.navigate('Screen_B')
    }
    return (
      <View style={styles.body}>
        <Text style={styles.text}>
          Screen A
        </Text>
        <Pressable
         style={({pressed}) => ({backgroundColor: pressed ? '#ddd' : '#0f0'})}
         onPress={onPressHandler}
         >
          <Text style={styles.text}>
            Go to Screen B
          </Text>
        </Pressable>
        <Button title='Button' onPress={awesomeFunc}>My Button</Button>
  
      </View>
    )
  }
  
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen
        name="Screen_A"
        component={ScreenA}
        options={{tabBarBadge: state}}
          />
        <Tab.Screen
        name="Screen_B"
        component={ScreenB}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
