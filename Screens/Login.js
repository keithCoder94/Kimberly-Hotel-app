import React, { useState } from 'react'
import { Text, StyleSheet, View,TouchableOpacity,Alert } from 'react-native'
import signIn from '../Auth/signIn'
import InputText2 from '../Components/InputText2'

import HotelLogo from '../Components/HotelLogo'

const Login = ({ navigation }) => {
    const [userEmail, setUserEmail] = useState("")
    const [password, setPassword] = useState("")

    const onLogin = () => {
        if (userEmail == "" && password == "") {
            Alert.alert("Username and Email Feild cannot be empty!")
           navigation.navigate("Home")
        } else {
            signIn(userEmail, password, navigation)

        }
    }
        
            return (
                <View style={styles.frame}>
                  
                        <Text style={styles.loginText}>WELCOME TO 053 HOTELS BOOKING APP</Text>
                       
                            <HotelLogo />
                       
                    
                        <Text style={styles.text2}></Text>
                       
                            <InputText2 setUserEmail={setUserEmail} setPassword={setPassword}/>
                            <TouchableOpacity onPress={onLogin} style={styles.loginBtn}>
                            <Text style={{color:'white',marginLeft:60,marginRight:60,marginTop:12}}>LOGIN</Text>
                            </TouchableOpacity>
                           
                        
                            {/* <LoginButton /> */}
                        
                  
                </View>
            )
        
    }
    export default Login

const styles = StyleSheet.create({
    frame:{
       flex:1,
        backgroundColor:'#142850'

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
    loginBtn: {
        height: 45,
        width:173,
        marginTop: 30,
        alignContent: 'center',
        borderWidth: 1,
        borderColor:'white',
        borderRadius:30,
       
        color: 'white',
        backgroundColor: '#142850',
        flexDirection: 'row',
        marginLeft:80,
        marginRight:80,
        marginTop:80
        

    },

})
