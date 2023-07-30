import React from "react";
import { StyleSheet, Text, View } from 'react-native'

function FlexContainer() {
  return (
    <View style ={[styles.containerBase]}>
      <View style ={[styles.child, { backgroundcolor:'cyan'}]}/>
      <View style={[styles.child, { backgroundColor:'red' }]} />
      <View style={[styles.child, { backgroundColor: 'yellow' }]} />
      <View style={[styles.child, { backgroundColor: 'red' }]} />
      <View style={[styles.child, { backgroundColor: 'purple' }]} />
      <View style={[styles.child, { backgroundColor: 'blue' }]} />
      <View style={[styles.child, { backgroundColor:'red' }]} />
      <View style={[styles.child, { backgroundColor:'orange' }]} />
      <View style={[styles.child, { backgroundColor:'cyan' }]} />
    </View>
  );
}

const Flex = () => {
    return(
      <View style={{ height:'100%'}}>
      <FlexContainer/>
      </View>
    );
  };
    const styles=StyleSheet.create({
    child:{width:70,height:80},
    containerBase:{flex:1,borderWidth:1,margin:10,flexWrap:'wrap',maxHeight:400,flexDirection:'row'},
  });
  export default Flex;

  //Flexbox is required in React to modify the layout on different screen sizes like laptops, computers, different smartphone sizes.
  







