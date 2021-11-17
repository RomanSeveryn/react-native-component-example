import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export default function App() {
  const [state, setState] = useState('Hello')
  console.log('!');
  const onChange = () => {
    console.log('111');
    setState('Hello Roman!')
  }
  return (
    <View style={styles.container}>
      <Button title='wikipedia' onPress={() => {Linking.openURL('https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%B3%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D0%BD%D0%B8%D1%86%D0%B0') }}/>
      <View style={styles.text}>
      <Text>{state}</Text>
      </View>
      <View>
      <Button title='update state' onPress={onChange}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 10,
    borderColor: 'blue',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontFamily: 'italic',
    margin: 10,
    textTransform: 'uppercase'
  },
  button: {

  }
});
