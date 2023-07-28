import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
const API = 'https://weatherapi-com.p.rapidapi.com/current.json';
const renderWeather = ({ item }) => <Weather country={item.country} city={item.city} state={item.state}/>;

const Weather = (props) => (
 <View style={styles.item}>
   <Text style={styles.itemText}>{props.country}</Text>
   <Text style={styles.itemText}>{props.city}</Text>
   <Text style={styles.itemText}>{props.state}</Text>
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
        <FlatList style={styles.Weather}
         data={Weather} renderItem={renderWeather}
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