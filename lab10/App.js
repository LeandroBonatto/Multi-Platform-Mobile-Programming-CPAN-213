import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, Alert } from 'react-native';

export default function RegistrationFormApp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleConfirmation = (confirmed) => {
    setShowModal(false);
    if (confirmed) {
      Alert.alert('Registration successful.');
    }
  };

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide" transparent={false} visible={showModal}
        onRequestClose={() => {setShowModal(!showModal);}}>
        <View style={styles.container}>
          <View style={[styles.modalView]}>
            <TextInput placeholder="Name" onChangeText={(text) => setName(text)} value={name}></TextInput>
            <TextInput placeholder="Email" onChangeText={(text) => setEmail(text)} value={email}></TextInput>
            <Text>Are you sure you want to register</Text>
            <Button title="No" onPress={() => handleConfirmation(false)} />
            <Button title="Yes" onPress={() => handleConfirmation(true)} />
          </View>
        </View>
      </Modal>
    </View>
      );
    };
    


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
