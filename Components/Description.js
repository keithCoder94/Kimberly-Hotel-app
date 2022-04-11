import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, } from 'react-native'

export default class ProteaHotel extends Component {
    render() {
        return (
            <View>
                <View style={styles.hotelImage}>
                    <ImageBackground style={styles.icon} source={require('../Assets/protea_hotel.png')}

                    > <Text style={{ color: 'white', padding: 20, marginTop: 80, textAlign: 'left', fontWeight: 'bold', marginLeft: -10 }}>Kimberley Protea Hotel</Text>
                    </ImageBackground>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    infoframe: {
        width: 100,
        height: 100,
        alignItems: 'center'
    },

})
