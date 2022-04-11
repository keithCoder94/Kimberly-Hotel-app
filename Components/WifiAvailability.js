import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'


export default class WifiAvailability extends Component {
    render() {
        return (
            <View>

                <Image style={styles.icon} source={require('../Assets/Wi-Fi.png')}>

                </Image>
                <Text style={{fontSize: 13,fontWeight: 'bold',marginTop:5,
        }}>        WIFI</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 28,
        height: 39,
        marginLeft: 30,
        marginTop: -5
    },

    
})
