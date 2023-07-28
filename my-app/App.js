import React, { Component } from 'react';
import {Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity,
 TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';
const App = (props)=>{
  const ShowAlert = () => {alert("You Pressed Me!")};
  const ShowAlertLongPress = () => {alert("You Long Pressed Me!")};
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={ShowAlert} underlayColor="white">
          <View style={styles.button}><Text style={styles.buttonText}>TouchableHighlight</Text></View>
        </TouchableHighlight>
        <TouchableNativeFeedback onLongPress={ShowAlertLongPress} >
          <View style={styles.button}><Text style={styles.buttonText}>TouchableNativeFeedback</Text></View>
        </TouchableNativeFeedback>
        <TouchableWithoutFeedback onPress={ShowAlert}>
          <View style={styles.button}><Text style={styles.buttonText}>TouchableWithoutFeedback</Text></View>
        </TouchableWithoutFeedback>
        <TouchableOpacity onLongPress={ShowAlertLongPress} underlayColor="white">
          <View style={styles.button}><Text style={styles.buttonText}>TouchableOpacity</Text></View>
        </TouchableOpacity>
      </View>
    );
  }
export default App;
const styles = StyleSheet.create({
  container: {paddingTop: 40,alignItems: 'stretch'},
  button: {marginBottom: 10,backgroundColor: 'orange'},
  buttonText: {textAlign: 'center',padding: 20,color: 'white'}}); 
