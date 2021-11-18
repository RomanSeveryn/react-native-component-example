import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, RefreshControl, FlatList, SectionList, TextInput, TouchableOpacity, TouchableHighlight, Pressable, Alert, ToastAndroid, Modal, Image } from 'react-native';

export default function App() {

  const [name, setName] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [showWarning, setShowWarning] = useState(false)


  const onPressHandler = () => {
    if (name.length > 3) {
    setSubmitted(!submitted)
    } else {
    setShowWarning(true)
    }
  }

 
  return (
    <View style={styles.container}>
      <Modal
       visible={showWarning}
       onRequestClose={() => setShowWarning(false)}
       transparent={true}
       >
         <View style={styles.centered_view}>
           <View style={styles.warning_modal}>
           <View style={styles.warning_title}>
             <Text style={styles.text}>
               WARNING
             </Text>
           </View>
                <Text>The text must have longer than 3 characters</Text>
                <Pressable style={styles.warning_button} onPress={() => setShowWarning(false)}>
                  <Text>
                    OK
                  </Text>
                </Pressable>
                
           </View>
         </View>
      </Modal>
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
      <View>
        <Text>
        Your name is: {name}
      </Text>
      </View>
      
      
      :
      <Image style={styles.image} source={require('./assets/audi.png')}/>
      // <Image style={styles.image} resizeMode='stretch' source={{uri: 'https://carta.com/wp-content/uploads/2019/08/axios.png'}}/>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center'
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
  },
  input: {
    padding: 10,
    borderColor: 'grey',
    borderWidth: 2,
    fontSize: 14
  },
  button: {
    marginTop: 30
  },
  centered_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099'
  },
  warning_modal: {
    width: 300,
    height: 300,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 20
  },
  warning_title: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff0',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },
  warning_button: {
    alignItems: 'center',
    marginTop: 130
  },
  image: {
    width: 150,
    height: 150
  }
});
