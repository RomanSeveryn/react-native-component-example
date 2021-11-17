import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, RefreshControl, FlatList } from 'react-native';

export default function App() {

  const [refrech, setRefresh] = useState(false)

  const [state, setState] = useState([
    {key: '1', number: '1'},
    {key: '2', number: '2'},
    {key: '3', number: '3'},
    {key: '4', number: '4'},
    {key: '5', number: '5'},
    {key: '6', number: '6'},
    {key: '7', number: '7'},
    {key: '8', number: '8'},
    {key: '9', number: '9'},

  ])
  const onRefresh = () => {
    setRefresh(true);
    setState([...state, {key: 10, number: '10'}]);
    setRefresh(false)
  }
  return (
    <View>
      <FlatList data={state} renderItem={({item}) => 
          (
      <View style={styles.item}>
        <Text style={styles.text} key={item.key}>{item.number}</Text>
      </View>
          )} 
          refreshControl={
                <RefreshControl refreshing={refrech} onRefresh={onRefresh}/>
              }
          />
    </View>
    // <View style={styles.container}>
    //   <ScrollView refreshControl={
    //     <RefreshControl refreshing={refrech} onRefresh={onRefresh}/>
    //   }>
    //   {
    //     state.map((item) => {
    //       return (
    //   <View style={styles.item}>
    //     <Text style={styles.text} key={item.key}>{item.number}</Text>
    //   </View>
    //     )})
    //   }
    //   </ScrollView>
    // </View>
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
    color: 'white',
    fontSize: 40,
    margin: 10,
  },
});
