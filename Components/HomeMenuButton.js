import React, { Component } from 'react'
import {StyleSheet, View,Image } from 'react-native'

export default class HomeMenuButton extends Component {
    render() {
        return (
            <View>
               
                <View>
                <Image style={styles.icon} source={require('../Assets/HomeButton.png')} />
                </View>
               
            </View>
        )
    }
}

const styles = StyleSheet.create({
            icon:{
                width:40,
                height:28,
                marginTop:15,
                marginLeft:19 
                
            },
            
})
