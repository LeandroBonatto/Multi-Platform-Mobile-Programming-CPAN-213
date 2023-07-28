import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const musicList = () => {
  const songs = useSelector((state) => state.songs);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.artist}>{item.artist}</Text>
    </View>
  );
}

export default musicList;