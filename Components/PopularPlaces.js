import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class PopularPlaces extends Component {
    render() {
        return (
            <View>
                <Text style={styles.text}>
                            Popular Places
                        </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontSize:18,
       
        fontWeight:'bold',
       
    },
})
