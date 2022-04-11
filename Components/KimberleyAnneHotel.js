import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import KimberleyAnneText from './KimberleyAnneText'

export default class kimberleyAnneHotel extends Component {
    render() {
        return (
            <View>

                <View>
                    <TouchableOpacity>
                        <Image style={styles.icon} source={require('../Assets/KimberleyAnneHotel.png')} />
                        <KimberleyAnneText />
                    </TouchableOpacity>

                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 149,
        height: 145,
        marginTop: '12%',
        borderRadius: 20
    },

})
