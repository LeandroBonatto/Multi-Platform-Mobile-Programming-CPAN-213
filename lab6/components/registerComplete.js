import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text } from 'react-native';

function registerComplete({ navigation }) {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Name" component={Name} />
        <Stack.Screen name="Email" component={Email} />
        <Stack.Screen name="Password" component={Password} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Text>Thank you, {Name}, for registering with us! We have sent you an email at {Email}</Text>
    </Stack.Navigator>
  );
}

export default registerComplete;