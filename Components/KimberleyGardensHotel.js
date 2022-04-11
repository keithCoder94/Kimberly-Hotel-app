import React, { Component } from 'react'
import { StyleSheet, View, Text, ImageBackground,TouchableOpacity } from 'react-native'

export default class Cards extends Component {
    render() {
        const { navigation } = this.props
        return (


            <View>
                <TouchableOpacity>
                    <ImageBackground style={styles.icon} source={require('../Assets/KimberleyGardensHotel.png')}

                    > <Text style={{ color: 'white', padding: 20, marginTop: 80, textAlign: 'left', fontWeight: 'bold', marginLeft: -10 }}>Kimberley Gardens Hotel</Text>
                    </ImageBackground>
                </TouchableOpacity>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 145,
        height: 142,
        borderRadius: 20
    },
})
