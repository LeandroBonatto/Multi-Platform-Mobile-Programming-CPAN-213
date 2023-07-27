import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {navigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const ContactsButton = (navigation) =>(<Button title="Go to Contacts" onPress={() => navigation.navigate('Contact',{country:"Canada"})} />)
const AboutButton = (navigation) => (<Button title="Go to About" onPress={() => navigation.navigate('About')}/>)
const GoBackButton = (navigation) => (<Button title="Go back" onPress={() => navigation.goBack()}/>)
const CanadaLine = <Text>Our Canadian Line: 111-111-1111</Text>;
const InternationalLine = <Text>OurInternational Line: 1800-111-1111</Text>;


const HomeButton =(navigation) => (
<Button title="Go to Home screen" onPress={() => 
  navigation.navigate('Home')}/>
);

const ContactsButton = (navigation) => (
<Button title="Go to Contacts screen" onPress={() => 
  navigation.navigate('Contact', navigation.navigate('Contact', { country: "Canada" })} />
);

const AboutButton = (navigation) => (
  <Button title="Go to about screen" onPress={() => 
    navigation.navigate('Avout')}/>
  );

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text> Home Screen</Text>
      {AboutButton(navigation)}
      {ContactsButton(navigation)}
    </View>);
}
const AboutScreen = ({ navigation }) => {
  return (
    <View>
      <Text> About Screen</Text>
      {AboutButton(navigation)}
      {ContactsButton(navigation)}
    </View>);
}
const ContactScreen = ({ navigation, route }) => {
  //{
    // country: "canada"
  // } 

  const { country } = route.params;
  return (
  <View>
    <Text> Contact Screen</Text>
    { country === "Canada" ? CanadianLine : InternacionalLine }
      {AboutButton(navigation)}
      {ContactsButton(navigation)}
  </View>);
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <navigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </navigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
