import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {Ionicons, Entypo} from '@expo/vector-icons'
import {globalStyles, colors} from '../components/CommonComponentStyle'

export default class Header extends Component {
    render() {
        
        return (
            <LinearGradient colors={[colors.violetDark, colors.violetLight]} start={[0,0]} end={[1,1]}>
             <View style={{marginHorizontal:32, paddingVertical: 64}}>
                <View style={globalStyles.rowBetween}>
                    <Ionicons name="md-arrow-back" color={colors.text}/>
                    <Entypo name="dots-three-vertical" color={colors.text} size={24}/>
                </View>

               <View style={globalStyles.imageContainer}>
                   <View>
                     <View style={globalStyles.check}>
                         <Ionicons name='md-checkmark' size={20} color={colors.pink} />
                     </View>

                <Image source = {{}}/>
                   </View>
               </View>
             </View>
            </LinearGradient>
           
        )
    }
}
