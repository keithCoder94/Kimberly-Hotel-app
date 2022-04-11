import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Register from '../hotel_app_2/Screens/Register'
import Login from '../hotel_app_2/Screens/Login'
import Home from "../hotel_app_2/Screens/Home"
import HotelData from "../hotel_app_2/Screens/HotelData"
import KimberleyClubHotelInfo from '../hotel_app_2/Screens/KimberleyClubHotelInfo';

 
const Stack = createNativeStackNavigator();


export default function App({navigation}) {
  return (
    
  
        <NavigationContainer>
          <Stack.Navigator  screenOptions={{headerShown: true}}    initialRouteName='Home'>
          <Stack.Screen name="Home" component ={Home} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name='Hotel'component={HotelData}/>
         
            <Stack.Screen name="Register" component={Register} />
          
            <Stack.Screen name="KimberleyClubHotelInfo" component={KimberleyClubHotelInfo} />
            
            
          </Stack.Navigator>
        </NavigationContainer>
  
    

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});
