import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import SevenDaysPage from './screens/SettingsScreen';
import MonthlyScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SevenDaysPage" component={SevenDaysPage} />
        <Stack.Screen name="MonthlyScreen" component={MonthlyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
