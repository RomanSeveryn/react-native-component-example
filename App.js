import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, RefreshControl, FlatList, SectionList, TextInput } from 'react-native';

export default function App() {

  const [state, setState] = useState()
 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput style={styles.input} placeholder='name' onChangeText={(value) => setState(value)}/>
      <Text>
        Your name is: {state}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    flexDirection: 'column'
  },
  item: {
    backgroundColor: 'violet',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  text: {
    color: 'black',
    fontSize: 40,
    margin: 10,
  },
  input: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 2,
    fontSize: 14
  }
});
