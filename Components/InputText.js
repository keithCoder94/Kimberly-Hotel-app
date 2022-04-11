import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from "react-native";

const InputText = () => {
  

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Your name"
       
      />
      <TextInput
        style={styles.input2}
        onChangeText={onChangeNumber}
        
        placeholder="Email"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input2}
        onChangeText={onChangeNumber}
        
        placeholder="Password"
        keyboardType="numeric"
      />
       <TextInput
        style={styles.input2}
        onChangeText={onChangeNumber}
        
        placeholder="Confirm Password"
        keyboardType="numeric"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    color:'white',
    marginTop:90,
    marginLeft:30,
    marginRight:30,
    borderRadius:20,
    borderColor:'white',
    backgroundColor:'white'
    
  },
  input2:{
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 20,
    marginTop:10,
    marginLeft:30,
    marginRight:30,
    borderRadius:20,
    borderColor:'white',
    backgroundColor:'white'

  }
});

export default InputText;