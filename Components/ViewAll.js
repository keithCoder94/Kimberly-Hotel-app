import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'


const url = 'https://www.booking.com/city/za/kimberley.en.html?aid=303948;label=kimberley-rciUHeigFMHJsEsclAjP5QS103007360301:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-156017270:lp1028709:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGLSSAuId8ToA;ws=&gclid=CjwKCAjw9LSSBhBsEiwAKtf0n_65r1JN8u8QmRDPQL1a8jr2PvrdRqVgk_zngN2UtOYusqwBKg1c5hoCQSYQAvD_BwE';



const ViewAll = () => {
    return (
        <View>
            <StatusBar
                animated={false}
                barStyle='dark-content'
                hidden={false}
                translucent={false}
            />
            <TouchableOpacity onPress={() => Linking.openURL(url)}>
                <Text style={styles.fourthHeading}>
                    View All
                </Text>
            </TouchableOpacity>

        </View>
    )
}

export default ViewAll

const styles = StyleSheet.create({
    fourthHeading: {
        fontWeight: 'bold',


    }
})