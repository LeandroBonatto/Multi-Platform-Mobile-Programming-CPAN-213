import React, { useState } from 'react';
import { View, TouchableOpacity, Animated } from 'react-native';

const App = () => {
  const [animation] = useState(new Animated.Value(0));
  const [shapeColor, setShapeColor] = useState('grey');

  const spinAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start(() => {
      animation.setValue(0);
    });
  };

  const fadeInAnimation = () => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true
    }).start();
  };

  const colorAnimation = () => {
    setShapeColor('orange');
  };

  const resetAnimation = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true
    }).start();
    setShapeColor('yellow');
  };

  const spin = animation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
  });

  const fadeIn = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1]
  });

  const shapeStyles = {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: shapeColor,
    transform: [{ rotate: spin }],
    opacity: fadeIn
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={shapeStyles} />
      <TouchableOpacity style={{ backgroundColor: '#1c9c33',padding: 10, borderRadius: 10, marginTop: 20 }} onPress={spinAnimation}>
        <Animated.Text style={{ color: 'white', fontSize: 16, transform: [{ rotate: spin }] }}>Spin</Animated.Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#601c9c', padding: 10, borderRadius: 10, marginTop: 20 }} onPress={fadeInAnimation}>
        <Animated.Text style={{ color: 'white', fontSize: 16, opacity: fadeIn }}>Fade In</Animated.Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#1c9c33', padding: 10, borderRadius: 10, marginTop: 20 }} onPress={colorAnimation}>
        <Animated.Text style={{ color: 'white', fontSize: 16 }}>Change Color</Animated.Text>
      </TouchableOpacity>
      <TouchableOpacity style={{ backgroundColor: '#601c9c', padding: 10, borderRadius: 10, marginTop: 20 }} onPress={resetAnimation}>
        <Animated.Text style={{ color: 'white', fontSize: 16 }}>Reset</Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;
