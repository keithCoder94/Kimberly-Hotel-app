import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'


export default class NumberOfPeople extends Component {
    render() {
        return (
            <View>

                <Image style={styles.icon} source={require('../Assets/People.png')}>

                </Image>
                <Text style={{fontSize: 13,fontWeight: 'bold',marginTop:5,}}>  3-6</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 39,
        height: 29,
        marginTop: 3
        
    },

    
})
