import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const weatherList = () => {
  const weather = useSelector((state) => state.weather);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.country}>{item.country}</Text>
      <Text style={styles.city}>{item.city}</Text>
      <Text style={styles.state}>{item.state}</Text>
    </View>
  );
}

export default weatherList;