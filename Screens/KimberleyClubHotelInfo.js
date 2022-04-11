import React, {useEffect} from 'react'
import { StyleSheet, View, ImageBackground, Text } from 'react-native'
import NavigationButton from '../Components/NavigationButton'
import LikeButton from '../Components/LikeButton'
import HotelInfo from '../Components/HotelInfo'
import NumberOfPeople from '../Components/NumberOfPeople'
import WifiAvailability from '../Components/WifiAvailability'
import TvAvailability from '../Components/TvAvailability'
import CarAvailability from '../Components/CarAvailability'
import TennisAvailability from '../Components/Tennisavailability'
import BookingButton from '../Components/BookingButton'

export default function KimberleyClubHotelInfo({route}) {

    const hotel = route.params

    useEffect(()=>{
        console.log(hotel)
    }, [])
    return (
        <View style={styles.frame}>

            <ImageBackground style={styles.icon} source={require('../Assets/kimberleyclubhotelHeader.png')}>

            </ImageBackground>

            <View>
                <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', paddingTop: 15 }}>{hotel.Name}</Text>
                <NavigationButton />
                <LikeButton />
            </View>

            <View>
                <HotelInfo  hotel={hotel}/>
            </View>

            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <NumberOfPeople />
                <WifiAvailability />
                <TvAvailability />
                <CarAvailability />
                <TennisAvailability />
            </View>

            <View style={{ width: 350, marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18, }}>About</Text>
                
                <View style={{ marginTop: 5 }}>
                    <Text style={{ fontWeight: 'light', fontSize: 13, }}>{hotel.About}</Text>
                </View>
                <BookingButton />
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        height: "100vh",
        width: "100vw",
        alignItems: 'center',
        backgroundColor: 'white',

    },
    icon: {
        width: 360,
        height: 174,
    },


})
