import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { auth } from '../config/firebase'


export default function Register({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [rePass, setRePass] = useState('')

    function signUp() {
        if (password !== rePass) {
            alert("Password do not match")
        } else {
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // Signed in
                    var user = userCredential.user;
                    alert("Successfully signed up!!")
                    navigation.navigate('Home')
                    // ...
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ..
                });
        }
    }

    return (
        <View style={styles.frame}>
            <Text style={styles.registerText}>REGISTER</Text>
            <Text style={styles.text3}>Create your new account here</Text>
            <TextInput placeholder={'Email Address'} style={styles.input} onChangeText={(email) => setEmail(email)} />
            <TextInput placeholder={'Password'} style={styles.input} secureTextEntry onChangeText={(password) => setPassword(password)} />
            <TextInput placeholder={'Confirm Password'} style={styles.input} secureTextEntry onChangeText={(password) => setRePass(password)} />
            <TouchableOpacity style={styles.signUpButton} onPress={signUp}>
                <Text style={{ color: 'white', textAlign: 'center', alignContent: 'center', marginLeft: 55, marginRight: 55, marginTop: 12 }}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    frame: {
        backgroundColor: '#142850',
        flex: 1

    },
    loginText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'left',
        alignContent: 'center',
        marginLeft: 95,
        marginRight: 45,
        marginTop: 25,
        fontFamily: 'Times New Roman", Times, serif'

    },
    input: {
        height: 40,
        borderWidth: 1,
        padding: 20,

        marginTop: 80,
        marginLeft: 30,
        marginRight: 30,
        borderRadius: 20,
        borderColor: 'white',
        backgroundColor: 'white'

    },
    text2: {
        fontSize: 12,
        color: 'white',

        textAlign: 'left',
        alignContent: 'center',
        marginLeft: 25,
        marginTop: 2,
        fontFamily: 'Times New Roman", Times, serif'
    },
    nameTextField: {
        width: 25,
        height: 25,
        fontFamily: 'Times New Roman", Times, serif'
    },
    registerText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'left',
        alignContent: 'center',
        marginLeft: 25,
        marginTop: 25

    },
    text3: {
        fontSize: 12,
        color: 'white',

        textAlign: 'left',
        alignContent: 'center',
        marginLeft: 25,
        marginTop: 2
    },

    signUpButton: {
        height: 45,
        width: 173,
        marginTop: 30,
        alignContent: 'center',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 30,

        color: 'white',
        backgroundColor: '#142850',
        flexDirection: 'row',
        marginLeft: 80,
        marginRight: 80,
        marginTop: 80


    },



})
