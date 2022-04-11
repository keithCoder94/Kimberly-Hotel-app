import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class KimberleyClubHouseText extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> Kimberley Club House Hotel </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:14,
        color:'white',
        fontFamily:'Times New Roman", Times, serif',
        marginLeft:175,
        marginRight:79,
        marginTop:-50
        
    }
})
