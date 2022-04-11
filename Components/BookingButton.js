import React from 'react'
import { StyleSheet, View,Text,TouchableOpacity } from 'react-native'


export default function BookingButton (props){
    const{ onPress,title = 'BOOK NOW' } = props
    return (
        <View>

            <TouchableOpacity  style={styles.button}onPress={()=>this.props.navigation.navigate('KimberleyClubHotelInfo')}>
                <Text style={styles.text}>{title}</Text>
            </TouchableOpacity>
            
        </View>
    )
}

    

        

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        width:190,
        height:38,
        margin:25,
        alignSelf: 'center',
        paddingHorizontal: 32,
        borderRadius: 25,
        elevation: 3,
        backgroundColor:'#142850'
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
        color:'white'
    }


    
})
