import React, { useState, useEffect } from 'react';
import { TextInput, Text, View, TouchableOpacity, Linking, StatusBar, ScrollView } from 'react-native';
import { makeStyles, useTheme, Card } from 'react-native-elements';

import { db } from '../config/firebase'

const MyComponent = (props) => {
  const { theme } = useTheme();
  const styles = useStyles(theme, props);
  const url = 'https://www.booking.com/city/za/kimberley.en.html?aid=303948;label=kimberley-rciUHeigFMHJsEsclAjP5QS103007360301:pl:ta:p1:p2:ac:ap:neg:fi:tikwd-156017270:lp1028709:li:dec:dm:ppccp=UmFuZG9tSVYkc2RlIyh9Yf5EcukO1MOGLSSAuId8ToA;ws=&gclid=CjwKCAjw9LSSBhBsEiwAKtf0n_65r1JN8u8QmRDPQL1a8jr2PvrdRqVgk_zngN2UtOYusqwBKg1c5hoCQSYQAvD_BwE';


  const [hotel, setHotel] = useState([])
  const [search, setSearch] = useState("")
  const [location, setLocation] = useState("")
  const [address, setAddress] = useState("")

  const getHotel = (() => {
    db.collection('Hotels')
      .onSnapshot((snapshot) => {
        const disp = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))

        setHotel(disp)
      })
  })
  useEffect(() => {
    getHotel()
  }, [])



  return (

      <View style={styles.container}>
        <StatusBar
          animated={false}
          barStyle='dark-content'
          hidden={false}
          translucent={false}
        />
        <Text style={{ fontSize: 16, fontWeight: 'bold', flexDirection: 'flex', marginLeft: 20, marginTop: 10 }}>Hello , Kimberley</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 20, }}>Find Deals</Text>
        <View >
          <TextInput style={{ width: '70%', borderRadius: 20, height: 40, color: 'black', borderWidth: 1, borderColor: 'black', alignSelf: 'center', placeholder: 'Search', marginTop: 20, paddingLeft: 20 }} placeholder='Search' />
        </View>
        <View style={{ marginTop: 20, marginLeft: 20, flexDirection: 'row' }}>
          <Text style={{ fontSize: 18 }}>Popular Places</Text>
          <TouchableOpacity onPress={() => Linking.openURL(url)}>
            <Text style={{ flexDirection: 'row', marginLeft: 150, fontSize: 18 }}> View All</Text>
          </TouchableOpacity>
        </View>
        

        <View style={{ marginTop: 50, flexDirection: 'row', justifyContent: 'center', flex: 1 }}>
        <ScrollView vertical='true' style={{marginTop:30,paddingTop:-20,flex:1}}>
          {hotel.map(item => (
            <TouchableOpacity onPress={() => props.navigation.navigate('KimberleyClubHotelInfo', item)}>
              <Card.Image
                style={{ borderRadius: 20, height: 120, width: 120, marginLeft: 20,margin:10 }}
                source={{
                  uri: 'https://www.sa-venues.com/visit/thekimberleyclub/14.jpg'
                }}
              />
              <View >
                <Text style={{marginLeft:160,marginTop:-110}}>{item.Name}</Text>
                <Text style={{marginLeft:160}}>{item.Price}</Text>
                <Text style={{marginLeft:160}}>{item.Contact}</Text>
               <Text style={{marginLeft:160 ,marginRight:160}}>{item.Street}</Text>
             
          </View>
             
            </TouchableOpacity >


                         
          
          ))}

          
          
        </ScrollView>
        </View>
        
      </View>




  );
};

const useStyles = makeStyles((theme, props) => ({
  container: {
    backgroundColor: '#fff',
    flex:1
  },
  text: {
    color: theme.colors.secondary,
  },

  image: {
    width: '30%'
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },




}));

export default MyComponent;