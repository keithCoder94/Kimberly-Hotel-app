import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Card } from 'react-native-paper'
import HomeMenuButton from './HomeMenuButton'

export default class NavBar extends Component {
    render() {
        return (
            <View>
                <Card style={styles.card}>
                    <HomeMenuButton />
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card:{
        width:320,
        height:60,
        marginTop:15,
        backgroundColor:'#142850',
        alignSelf:'center',
        margin:5,
        marginRight:15,
        borderRadius:20
    }
})
