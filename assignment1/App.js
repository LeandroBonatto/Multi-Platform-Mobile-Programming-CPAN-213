import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { Image } from 'react-native';
import { useSelector } from 'react-redux';
const API = 'https://exempleAssignment1.com/';
const renderMusic = ({ item }) => <Music title={item.title} genere={item.genere} 
artist={item.artist} album={item.album}/>;

const Music = (props) => (
 <View style={styles.item}>
   <Text style={styles.itemText}>{props.title}</Text>
   <Text style={styles.itemText}>{props.genere}</Text>
   <Text style={styles.itemText}>{props.artist}</Text>
   <Text style={styles.itemText}>{props.album}</Text>
 </View>
);

export default function App() {
 const [data, setData] = useState({});
 useEffect(() => {
   fetch(API)
     .then((response) => response.json())
     .then((json) => {setData(json);});
 }, []);

 return (
   <View style={styles.container}>
        <FlatList style={styles.Music}
         data={Music} renderItem={renderMusic}
         keyExtractor={(item) => item.id}/>
   </View>
 );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    flex: 2,
    justifyContent: 'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 18,
    borderWidth:1,
    padding:10,
    margin:5,
    borderRadius:5
  },
  title: {
    fontSize: 18,
    fontStyle: 'normal'
  },
  artist: {
    fontSize: 16,
    fontStyle: 'normal',
  },
  genere: {
    fontSize: 16,
    fontStyle: 'normal'
  },
  album: {
    fontSize: 16,
    fontStyle: 'normal'
  },
});