import React, {useState} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default   function ScreenA({navigation}) {
  
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
      </View>
    )
  }

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