import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'

export default class NavigationButton extends Component {
    render() {
        return (
            <View>

                <Image style={styles.icon} source={require('../Assets/NavigationButtonRightDirection.png')}

                >
                </Image>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 37,       
        marginTop: -30,
        marginLeft: 280
    },

})
