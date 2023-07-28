import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MonthlyScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Weather</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default MonthlyScreen;
