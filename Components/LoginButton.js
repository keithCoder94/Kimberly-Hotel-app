import React from 'react'
import { Text, StyleSheet, View, Image,TouchableOpacity } from 'react-native'

const LoginButton = () => {
    
        return (
        <View style={styles.iconContext}>
            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Image style={styles.icon} source={require('../Assets/LoginButton.png')} />
            </TouchableOpacity>
            <View>
                <TouchableOpacity>
                    <View>
                    <Text style={styles.text}>
                            Dont Have an Account? Sign Up 
                        </Text>
                    </View>   
                </TouchableOpacity>
                <View>
                    <TouchableOpacity>
                        <Text style={styles.ForgotPasswordText}>
                            Forgot Password
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                
            </View>
        </View>
        )
    }

export default LoginButton


const styles = StyleSheet.create({
    iconContext:{
        flexDirection: 'column',
        alignSelf:'center',
        textAlign:'center'
    }
    
    ,
    icon: {
        width: 173,
        height: 45,
        marginTop: 50,
        alignSelf:'center'
    },
    text:{
        color:'white',
        marginTop:50,
        fontSize:18
    },
    ForgotPasswordText:{
        color:'white',
        marginTop:20,
        fontSize:18,
        textAlign:'left'

    },
   

})
