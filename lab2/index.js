import React from "react";
import { View, StyleSheet, TextInput, Text } from "react-native/types";

const RegistrationForm = () => {
    const[FirstName, setFirstName] = useState("");
    const[LastName, setLastName] = useState("");
    const[Email, setEmail] = useState("");
    const[Login, setPassword] = useState("");
    const[Register, setRegister] = useState("");

    return(
        <View style={styles.conteiner}>
            <Text style={styles.label}>FirstName:</Text>
            <TextInput
                style={styles.input}
                value={FirstName}
                onChangeText={text => setFirstName(text)}
            />
            <Text style={styles.label}>LastName:</Text>
            <TextInput
                style={styles.input}
                value={LastName}
                onChangeText={text => setLastName(text)}
            />
            <Text style={styles.label}>Email:</Text>
            <TextInput
                style={styles.input}
                value={Email}
                onChangeText={text => setEmail(text)}
            />
            <Text style={styles.label}>Password:</Text>
            <TextInput
                style={styles.input}
                value={Password}
                onChangeText={text => setPassword(text)}
            />
            <Text style={Styles.label}>Register:</Text>
            <TextInput
                style={styles.input}
                value={Register}
                onChangeText={text => setRegister(text)}
            />
            <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    input:{
        backgroundColor: 'lightgreen',
        height: 50,
        margin: 12,
        borderWidth:5,
        borderRadius: 10,
        marginTop: 10,
        padding: 10,
        borderColor: 'lightgreen'
    },
    buttonContainer: {
        padding: 12,
        margin: 15,
        borderRadius: 10,
        backgroundColor: 'lightyellow'
    },
    buttonText: {
        fontSize: 12,
        fontFamily: 'Ariel',
        fontWeight: 'bold',
        textAlign: 'auto' 
    }
});

export default RegistrationForm;