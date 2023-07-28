import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Animated } from 'react-native';

export default function App() {
  const [animation] = useState(new Animated.Value(0));

  const handleButtonPress1 = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPress2 = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPress3 = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  const handleButtonPress4 = () => {
    Animated.parallel([
      Animated.timing(animation, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(animation, {
        toValue: 0,
        duration: 500,
        delay: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const interpolateColor = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#F58529', '#DD2A7B'],
  });

  const animatedStyle = {
    backgroundColor: interpolateColor,
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.background, animatedStyle]} />

      <TouchableOpacity style={styles.button} onPress={handleButtonPress1}>
        <Text style={styles.buttonText}>Animation 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleButtonPress2}>
        <Text style={styles.buttonText}>Animation 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleButtonPress3}>
        <Text style={styles.buttonText}>Animation 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleButtonPress4}>
        <Text style={styles.buttonText}>Animation 4</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  button: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#333',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
