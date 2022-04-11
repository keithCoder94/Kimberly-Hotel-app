import React from 'react'
import { Text, StyleSheet, View, Image,TouchableOpacity } from 'react-native'

const SignupButton = () => {
    
        return (
        <View style={styles.iconContext}>
            <TouchableOpacity>
            <Image style={styles.icon} source={require('../Assets/SignupButton.png')} />
            </TouchableOpacity>
            <View>
                <TouchableOpacity>
                    <Text style={styles.text}>
                        Back to Sign In
                    </Text>
                </TouchableOpacity>
                
            </View>
        </View>
        )
    }

export default SignupButton


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
        marginTop: 50
    },
    text:{
        color:'white',
        marginTop:30,
        fontSize:18
    }
   

})
