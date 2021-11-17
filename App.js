import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Linking, ScrollView, RefreshControl, FlatList, SectionList } from 'react-native';

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

  const Data = [
    {title: 'title 1', data: ['item 1-1', 'item 1-2', 'item 1-3']},
    {title: 'title 2', data: ['item 2-1', 'item 2-2', 'item 2-3']},
    {title: 'title 3', data: ['item 3-1', 'item 3-2', 'item 3-3']},
    {title: 'title 4', data: ['item 4-1', 'item 4-2', 'item 4-3']}
  ]
  const onRefresh = () => {
    setRefresh(true);
    setState([...state, {key: 10, number: '10'}]);
    setRefresh(false)
  }
  return (

      <SectionList keyExtractor={(item, index) => index.toString()}
      sections={Data}
      renderItem={({item}) => (
          <Text style={styles.text}>{item}</Text>
            )}
            renderSectionHeader={({section}) => (
          <View style={styles.item}>
            <Text style={styles.text}>{section.title}</Text>
          </View>
          )}
      />
    // <View>
    //   <FlatList data={state} renderItem={({item}) => 
    //       (
    //   <View style={styles.item}>
    //     <Text style={styles.text} key={item.key}>{item.number}</Text>
    //   </View>
    //       )} 
    //       refreshControl={
    //             <RefreshControl refreshing={refrech} onRefresh={onRefresh}/>
    //           }
    //       />
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
});
