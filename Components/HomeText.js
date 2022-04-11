import React, { Component } from 'react'
import { Text, StyleSheet, View, } from 'react-native'
import Icon from '../Components/Icon'
export default class HomeText extends Component {
    render() {
        return (
            <View>
                <Text style={styles.headingText}> Hello Kimberley </Text>
                <View>
                    <Text style={styles.secondHeading} >
                        Find Deals
                    </Text>
                    <Icon />
                    
                        

                       
                    
                </View>
                
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:13,
        marginTop:5,
        marginLeft:20
    },

    secondHeading:{
        fontSize:24,
        marginLeft:20,
        marginTop:5,
    },

    thirdHeading:{
        fontSize:18,
        marginTop:120,
        fontWeight:'bold',
    },
    

})
