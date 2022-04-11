import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, TextInput } from "react-native";
import signIn from '../Auth/signIn'
const InputText2 = ({setUserEmail, setPassword}) => {

  return (
    <SafeAreaView>
      <TextInput placeholder={'Email Address'}style={styles.input } onChangeText={(userEmail) => setUserEmail(userEmail)} />
      <TextInput style={styles.input2} onChangeText={(password) => setPassword(password)} secureTextEntry={true} placeholder="Password"/>
     </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,

    borderWidth: 1,
    padding: 20,
    color: 'white',
    marginTop: 90,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white'

  },
  input2: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 20,
    marginTop: 40,
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
    fontFamily: 'Times New Roman", Times, serif'

  }
});

export default InputText2;