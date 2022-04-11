import React, { Component } from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'
import { Rating } from 'react-native-ratings';

export default class HotelInfo extends Component {

        

    render() {
        console.log(this.props.hotel.Price)
        return (
            <View >
                <View>
                    <Image style={styles.icon} source={require('../Assets/Location.png')}

                    >
                    </Image>
                    <Text style={{ marginTop: -39, fontSize: 13, paddingLeft: 35 }}>{this.props.hotel.Location}</Text>

                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ marginTop: 20, fontSize: 13, }}>Price</Text>
                    <Text style={{ marginTop: 20, fontSize: 13, fontWeight: 'bold', paddingLeft: 80 }}>Reviews</Text>
                </View>

                <View style={{ flexDirection: 'row',}}>
                    <Text style={{  fontSize: 13, paddingRight: 50 }}>{this.props.hotel.Price}</Text>
                    <Text style={{  fontSize: 13, marginLeft: 29, fontWeight: 'bold' }}>5.9</Text>
                    <Rating
                        type='custom'

                        ratingColor='#000000'
                        ratingBackgroundColor='#fff'
                        ratingCount={5}
                        imageSize={15}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 2 }}
                    />
                </View>

                <View style={{ flexDirection: 'row', marginTop: 20}}>
                    <Text style={{ fontSize: 13, fontWeight: 'bold', }}>DETAILS</Text>
                    <Text style={{fontSize: 13, fontWeight: 'bold', paddingLeft: 35 }}>ROOMS</Text>
                    <Text style={{ fontSize: 13,  fontWeight: 'bold', paddingLeft: 35 }}>REVIEWS</Text>
                    <Text style={{  fontSize: 13, fontWeight: 'bold', paddingLeft: 35 }}>NEAR BY</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
        marginTop: 30
    },

})
