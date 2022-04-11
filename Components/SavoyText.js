import React, { Component } from 'react'
import { AppRegistry,Text, StyleSheet, View } from 'react-native'

export default class SavoyText extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> Savoy Hotel </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:12,
        color:'white',
        fontFamily:'Futura-CondensedExtraBold',
        marginLeft:20,
        marginRight:20,
        marginTop:-35,
        fontWeight:'bold',
        
    }
})
AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);
