import React, { Component } from 'react'
import { StyleSheet, View, TouchableOpacity,Image } from 'react-native'

export default class StartButton extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require('../Assets/StartButton.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 230,
        height: 50,
        marginTop: -80,
        alignSelf:'center'
    }
})
