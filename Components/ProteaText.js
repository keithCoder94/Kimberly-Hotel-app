import React, { Component } from 'react'
import {AppRegistry, Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class ProteaText extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Text style={styles.text}> Protea Hotel </Text>
                </TouchableOpacity>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:15,
        color:'white',
        flexDirection: 'row',
        marginTop:-30,
        marginLeft:"50%",
        textDecorationColor:'none',
        zIndex:10,
        
        fontFamily:'Futura-CondensedExtraBold',
    }
})

AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);
