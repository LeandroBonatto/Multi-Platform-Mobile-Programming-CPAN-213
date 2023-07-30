import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity,FlatList, TextInput, Button,  } from "react-native";
import { connect } from "react-redux";
import { increase, decrease, addItem } from "./redux/actions";

const App = ({ increment, decreament, items, addItem }) => {
  const [text, setText] = useState("");

  const handleAddItem = () => {
    addItem({ id: Date.now(), name: text });
    setText("");
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={setText}
          value={text}
          placeholder="Enter Value Here"
        />
        <Button title="Add Values To FlatList " onPress={handleAddItem} />
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = styleSheet.create(
  {container: {flex: 1, paddingTop: 20, backgroundColor: '#ecf0f1', padding: 10},
seperator: {height: 10,},
text: {textAlign: 'center', height: 30, lineHeight: 30}});

const mapStateToProps = (state) => ({counter: state.counter.value});
const mapDispatchToProps = {increase, decrease};

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);



