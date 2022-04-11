import React, { Component } from 'react'
import { AppRegistry,Text, StyleSheet, View } from 'react-native'

export default class KimberleyAnneText extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}> Kimberley Anne Hotel </Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:12,
        color:'white',
       fontWeight:'bold',
      justifyContent:'center',
      marginLeft:'17%',
        
        marginTop:-39,
        textDecorationColor:'none',
       
        fontFamily:'Roboto',
        
    }
})


AppRegistry.registerComponent('AndroidFonts', () => AndroidFonts);
