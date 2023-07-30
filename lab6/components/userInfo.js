import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const UserInfo = ({ navigation }) => {
    const [Name, setName] = React.useState('');
    const [Email, setEmail] = React.useState('');
    const [Password, setPassword] = React.useState('');
  
    const handleSubmit = () => {
      navigation.navigate('registerComplete', { Name, Email, Password });
    };

  return (
    <View>
      <Text>Name</Text>
      <TextInput value={Name} onChangeText={setName} />
      <Text>Email</Text>
      <TextInput value={Email} onChangeText={setEmail} />
      <Text>Password</Text>
      <TextInput value={Password} onChangeText={setPassword} />
      <Button title="SIGNUP"/>
    </View>
  );
}

export default userInfo;