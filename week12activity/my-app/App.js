import React from "react";
import { View, StyleSheet, ToastAndroid, Button } from "react-native";
const App = () => {
  return (
    <View style={styles.container}>
      <Button title="Toast" onPress={() => 
      ToastAndroid.show("Here is some toast for you", ToastAndroid.SHORT)} />
      <Button title="Toast + Gravity" onPress={() => 
      ToastAndroid.showWithGravity("Here is some toast for you", ToastAndroid.SHORT,ToastAndroid.TOP)} />
      <Button title="Toast + Gravity + Offset" onPress={() => 
      ToastAndroid.showWithGravityAndOffset("Here is some toast for you", ToastAndroid.SHORT,ToastAndroid.TOP,50,50)} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,justifyContent: "space-around",paddingTop: 50,padding: 8}});
export default App;
