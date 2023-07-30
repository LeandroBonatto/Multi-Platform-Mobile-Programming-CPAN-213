import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import registerComplete from './componenets/registerComplete';
import userInfo from './componenets/userInfo';

const App = () => {
  return (
    <NavigationContainer>
      <registerComplete/>
      <userInfo/>
    </NavigationContainer>
  );
};

export default App;
