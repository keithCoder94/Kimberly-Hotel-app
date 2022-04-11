import React, { Component } from 'react'
import { StyleSheet, View,Image } from 'react-native'

export default class HotelLogo extends Component {
    render() {
        return (
            <View>

                <Image style={styles.icon} source={require('../Assets/Logo.png')} />
               
                
            </View>
        )
    }
}

const styles = StyleSheet.create({

    icon:{
        flexDirection: 'row',
       
        
        height:66,
        width:70,
        marginTop:-50,
        marginLeft:15
    }

})
