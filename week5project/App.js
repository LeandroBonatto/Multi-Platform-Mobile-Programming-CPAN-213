import * as React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList, image } from 'react-native';
import {Picker} from '@react-native-picker/picker';
const API = 'https://fakestoreapi.com/products?limit=10';
const renderProduct = ({ item }) => <Product title={item.title} price={item.price} 
description={item.description} category={item.category} image={item.image} rating={item.rating}
Picker={item.Picker}/>;

const Product = (props) => (
 <View style={styles.item}>
   <Text style={styles.itemText}>Title: {props.title}</Text>
   <Text style={styles.itemText}>Price: ${props.price} Years Old</Text>
   <Text style={styles.itemText}>Description: {props.description}</Text>
   <Text style={styles.itemText}>Category: {props.category}</Text>
   <Text style={styles.itemText}>Image: {props.image}</Text>
   <Text style={styles.itemText}> {props.rating.rate}</Text>
   <image
  style={{
    width: 100,
    height: 100
  }}
  source={{
    url: props.image
  }} />
 </View>
);
export default function App() {
 const [country, setCountry] = useState("Canada");
 useEffect(() => {
   fetch(API)
     .then((response) => response.json())
     .then((json) => {setData(json);});
 }, []);
 return (
   <View style={styles.container}>
    <Picker selectedValue={country} onValueChange={(value,index)=>{setCountry(value)}}>
      <Picker.Item label="Canada" value="ca" />
      <Picker.Item label="United States" value="us"/>
    </Picker>
   </View>
 );
}

const styles = StyleSheet.create({
 productList:{alignContent:"stretch",width:"100%",},
 container: {flex: 1,justifyContent: 'center',paddingTop: 40,backgroundColor: '#ecf0f1',padding: 8,},
 item:{borderWidth:1,padding:10,margin:5,borderRadius:5,backgroundColor:"purple"},
 itemText:{color:"white"}
 });
