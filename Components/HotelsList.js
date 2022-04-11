import React ,{ useState, useEffect}from 'react'
import { SafeAreaView,View, StyleSheet,Text,VirtualizedList ,ImageBackground} from 'react-native';

const DATA = []
const ListOfHotels = ({navigation}) =>{
    const [hotel, setHotel] = useState('')

    const renderItem = ({item, index})=>{


        return(
            <View key={index} style={styles.item}>
                <Text style={styles.text}>{item.title}Name of Hotel:</Text>
                <Text style={styles.text}>{item.title}Price of Hotel:</Text>
                <Text style={styles.text}>{item.title}Location of Hotel:</Text>
                <Text style={styles.text}>{item.title}Contact Details:</Text>
                <Text style={styles.text}>{item.title}image:</Text>
                <View style={styles.hotelImage}>
                    <ImageBackground style={styles.icon} source={require('../Assets/SavoyHotel.png')}

                    > <Text style={{ color: 'white', padding: 20, marginTop: 80, textAlign: 'left', fontWeight: 'bold', marginLeft: -10 }}>Kimberley Protea Hotel</Text>
                    </ImageBackground>
                   
                </View>

            </View>

        )
    }
    const getItemCount = (data) => 5

    const getItem = (data,index)=>({
        key: index,
        id: Math.random().toString(12).substring(0),
       
    })
    return(
        <SafeAreaView>
            <VirtualizedList 
            data={DATA}
            initialNumToRender={5}
            renderItem={renderItem}
            keyExtractor={item=> item.key}
            getItemCount={getItemCount}
            getItem={getItem}
            />
        </SafeAreaView>
    
    )
}


const styles = StyleSheet.create({
    item: {
        backgroundColor:'#072227',
        height:'150',
        justifyContent:'center',
        marginVertical:8,
        marginHorizontal:16,
        padding:20,
        
        
    },
    text:{
        color:'white'
    },

    icon: {
        width: 149,
        height: 145,
        alignSelf: 'center',
        marginLeft:500,
        marginTop:-100

       
    },

    



})

export default HotelsList


