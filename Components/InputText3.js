import { StyleSheet, Text, View } from 'react-native'
import React,{useState} from 'react'

export default function InputText3() {
  return (
    <View style={styles.frame}>
       <TextInput placeholder={'Email Address'} style={styles.input} onChangeText={(userEmail) => setUserEmail(userEmail)} />
            <TextInput placeholder={'Password'} style={styles.input} onChangeText={(password) => setPassword(password)} />
            <TextInput placeholder={'Confirm Password'} style={styles.input} onChangeText={(confirmPassword) => setConfirmPassword(confirmPassword)} />

            <TouchableOpacity style={styles.button} onPress={register}>
                <Text style={styles.registerText}>REGISTER</Text>
            </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    frame:{
        backgroundColor:'#142850',
        flex:1

    },
    loginText:{
        fontSize:18,
        color:'white',
        textAlign:'left',
        alignContent:'center',
        marginLeft:95,
        marginRight:45,
        marginTop:25,
        fontFamily:'Times New Roman", Times, serif'

    },
    text2:{
        fontSize:12,
        color:'white',
        
        textAlign:'left',
        alignContent:'center',
        marginLeft:25,
        marginTop:2,
        fontFamily:'Times New Roman", Times, serif'
    },
    nameTextField:{
        width:25,
        height:25,
        fontFamily:'Times New Roman", Times, serif'
    },
    registerText:{
        fontSize:18,
        color:'white',
        textAlign:'left',
        alignContent:'center',
        marginLeft:25,
        marginTop:25

    },
    text3:{
        fontSize:12,
        color:'white',
       
        textAlign:'left',
        alignContent:'center',
        marginLeft:25,
        marginTop:2
    },

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
})