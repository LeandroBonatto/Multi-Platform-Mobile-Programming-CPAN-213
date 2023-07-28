import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const SevenDaysPage = () => {
    return (
    <View style={styles.container}>
        <Text style={styles.title}>7 Days</Text>
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
        title: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
    },
});
    
export default SevenDaysPage;
