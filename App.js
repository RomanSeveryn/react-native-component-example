import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, RefreshControl, FlatList, SectionList, TextInput, TouchableOpacity } from 'react-native';

export default function App() {

  const [name, setName] = useState()
  const [submitted, setSubmitted] = useState(false)

  const onPressHandler = () => {
    setSubmitted(!submitted)
  }

 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput style={styles.input} placeholder='name' onChangeText={(value) => setName(value)}/>
      {/* <Button title={submitted ? 'Clear' : 'Submit'} onPress={onPressHandler} /> */}
      <TouchableOpacity onPress={onPressHandler} style={styles.button} activeOpacity={0.5}>
        <Text style={styles.text}>
        {submitted ? 'Clear' : 'Submit'}
        </Text>
      </TouchableOpacity>
      {submitted ?
      <Text>
        Your name is: {name}
      </Text>
      :
      null
      }
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
  },
  button: {
    backgroundColor: 'blue'
  }
});
