import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

const CustomButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  return (
    <TouchableWithoutFeedback onPressIn={handlePressIn} onPressOut={handlePressOut}>
      <View style={{ backgroundColor: isPressed ? 'red' : 'blue', padding: 10 }}>
        <Text style={{ color: 'white' }}>Press here</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomButton;
