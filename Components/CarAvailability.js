import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'


export default class CarAvailability extends Component {
    render() {
        return (
            <View>

                <Image style={styles.icon} source={require('../Assets/Car.png')}>

                </Image>
                <Text style={{fontSize: 13,fontWeight: 'bold',marginTop:5}}>        Parking</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 28,
        height: 33,
        marginLeft: 40
    },

    
})
