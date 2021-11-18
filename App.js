import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, RefreshControl, FlatList, SectionList, TextInput, TouchableOpacity, TouchableHighlight, Pressable, Alert, ToastAndroid } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const onPressHandler = () => {
    if (name.length > 3) {
    setSubmitted(!submitted)
    } else {
      // Alert.alert('Warning', 'The name must be longer than 3 characters', [
      //   { text: "Don't show me again", onPress: () => console.warn("Don't show me again Pressed!")},
      //   { text: 'Cancel', onPress: () => console.warn('Cancel Pressed!')},
      //   { text: 'OK', onPress: () => console.warn('OK Pressed!')}
      // ], {cancelable: true, onDismiss: () => console.warn('Alert dismissed')})
      ToastAndroid.showWithGravityAndOffset('The name must be longer than 3 characters',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
      100,
      100
      )
    }
  }

 
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Please write your name:
      </Text>
      <TextInput style={styles.input} placeholder='name' onChangeText={(value) => setName(value)}/>
      {/* <Button title={submitted ? 'Clear' : 'Submit'} onPress={onPressHandler} /> */}
      <Pressable onPress={onPressHandler} hitSlop={{top: 10, bottom: 10, right: 10, left: 10}} style={({pressed}) => [styles.button, {
    backgroundColor: pressed ? 'green' : 'blue'}]}>
        <Text style={styles.text}>
        {submitted ? 'Clear' : 'Submit'}
        </Text>
      </Pressable>
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
    marginTop: 30
  }
});
