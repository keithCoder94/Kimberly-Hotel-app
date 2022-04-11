import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, Text,TouchableOpacity } from 'react-native'


export default class Cards extends Component {
    render() {
        const { navigation } = this.props
        return (


            <View>
                <TouchableOpacity onClick={() => { navigation.navigate('KimberleyClubHotelInfo') }}>
                    <ImageBackground style={styles.icon} source={require('../Assets/DownTownHotel_1.png')}

                    > <Text style={{ color: 'white', padding: 20, marginTop: 80, textAlign: 'left', fontWeight: 'bold', marginLeft: -10 }}>Down Town Hotel</Text>
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
    },
})
