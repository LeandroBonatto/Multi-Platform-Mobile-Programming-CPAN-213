import React, { useState } from 'react';
import { View, Text, Button, Alert, Modal, TouchableOpacity } from 'react-native';

const Weather = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const handleShowModal = () => {
    setModalVisible(true);
  };

  const handleHideModal = () => {
    setModalVisible(false);
  };

  const handleConfirm = () => {
    Alert.alert('Confirmed', 'Action confirmed.');
  };

  const handleCancel = () => {
    Alert.alert('Cancelled', 'Action cancelled.');
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show Modal" onPress={handleShowModal} />

      <Modal visible={modalVisible} animationType="slide">
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Would you like to confirm this action?</Text>
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity onPress={handleConfirm} style={{ backgroundColor: 'green', padding: 10, margin: 5 }}>
              <Text style={{ color: 'white' }}>Confirm</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleCancel} style={{ backgroundColor: 'red', padding: 10, margin: 5 }}>
              <Text style={{ color: 'white' }}>Cancel</Text>
            </TouchableOpacity>
          </View>
          <Button title="Hide Modal" onPress={handleHideModal} />
        </View>
      </Modal>
    </View>
  );
};

export default Weather;
