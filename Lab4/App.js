import React from "react";
import { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList, image } from "react-native";
const API = "https://random-data-api.com/api/v2/users?size=5";
const Person = ({ data }) => (
  <info
    id={info.id}
    uid={info.uid}
    password={info.password}
    first_name={info.first_name}
    last_name={info.last_name}
    username={info.username}
    email={info.email}
    gender={info.gender}
    phone_number={info.phone_number}
    social_insurance_number={info.social_insurance_number}
    date_of_birth={info.date_of_birth}
    employment={info.employment}
    title={info.title}
    street_name={info.street_name}
    key_skill={info.key_skill}
    Price_Trace={info.Price_Trace}
    street_address={info.street_address}
    zip_code={info.zip_code}
    state={info.state}
    coordinates={info.coordinates}
    credit_card={info.zip_code}
    subscription={info.subscription}
    status={info.status}
    payment_method={info.payment_method}
    term={info.term}
  />
);

const InfoData = (props) => (
  <View style={styles.item}>
    <Text style={styles.itemText}>id: {props.id}</Text>
    <Text style={styles.itemText}>uid: {props.uid}</Text>
    <Text style={styles.itemText}>password: {props.password}</Text>
    <Text style={styles.itemText}>first_name: {props.first_name}</Text>
    <Text style={styles.itemText}>last_name: {props.last_name}</Text>
    <Text style={styles.itemText}>username: {props.username}</Text>
    <Text style={styles.itemText}>phone_number: {props.phone_number}</Text>
    <Text style={styles.itemText}>social_insurance_number: {props.social_insurance_number}</Text>
    <Text style={styles.itemText}>date_of_birth: {props.date_of_birth}</Text>
    <Text style={styles.itemText}>employment: {props.employment}</Text>
    <Text style={styles.itemText}>Title: {props.title}</Text>
    <Text style={styles.itemText}>street_name: {props.street_name}</Text>
    <Text style={styles.itemText}>key_skill: {props.key_skill}</Text>
    <Text style={styles.itemText}>Price_Trace: {props.Price_Trace}</Text>
    <Text style={styles.itemText}>street_address: {props.street_address}</Text>
    <Text style={styles.itemText}>zip_code: {props.zip_code}</Text>
    <Text style={styles.itemText}>state: {props.state}</Text>
    <Text style={styles.itemText}>coordinates: {props.coordinates}</Text>
    <Text style={styles.itemText}>credit_card: {props.credit_card}</Text>
    <Text style={styles.itemText}>status: {props.status}</Text>
    <Text style={styles.itemText}>payment_method: {props.payment_method}</Text>
    <Text style={styles.itemText}>term: {props.term}</Text>
  </View>
);
export default function App() {
  const [data] = useState([]);
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  }, []);
  return (
    <View style={styles.container}>
        <FlatList
          data={this.state.users}
          renderItem={this.renderUser}
          keyExtractor={item => item.id.toString()}
        />
        <TouchableOpacity
          style={styles.refreshButton}
          onPress={this.fetchUsers}>
          <Text style={styles.refreshButtonText}>Refresh Data</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 40,
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  item: {
    borderWidth: 1,
    padding: 10,
    margin: 5,
    borderRadius: 5,
    backgroundColor: "purple",
  },
  itemText: { color: "white" 
  },
  refreshButtonText: {
    color: 'white',
    borderRadius: 15,
  },
});
