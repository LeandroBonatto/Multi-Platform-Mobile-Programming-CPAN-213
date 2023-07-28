import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const Weather = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const animatedValue1 = useState(new Animated.Value(0))[0];
  const animatedValue2 = useState(new Animated.Value(0))[0];

  const handleStartAnimation = () => {
    setIsAnimating(true);
    Animated.parallel([
      Animated.timing(animatedValue1, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(animatedValue2, {
        toValue: 1,
        friction: 2,
        tension: 150,
        useNativeDriver: true,
      }),
    ]).start(() => {
      setIsAnimating(false);
      animatedValue1.setValue(0);
      animatedValue2.setValue(0);
    });
  };

  const boxStyle = [
    styles.box,
    {
      transform: [
        { scale: animatedValue1 },
        { translateX: animatedValue2.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 200],
        }) },
      ],
    },
  ];

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={handleStartAnimation}>
        <Text style={styles.buttonText}>{isAnimating ? 'Animating...' : 'Start Animation'}</Text>
      </TouchableOpacity>
      <Animated.View style={boxStyle} />
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
  button: {
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 10,
  },
});

export default Weather;
