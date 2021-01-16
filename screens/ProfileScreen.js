import React from 'react'
import {View, Text, Button, StyleSheet, ScrollView, StatusBar, ActivityIndicator} from 'react-native'
import { globalStyles } from '../components/CommonComponentStyle'
import Header from '../components/Header'


export default class ProfileScreen extends React.Compopnent{
  state = {
      user: {},
      isLoading: true
  }

  // this needs to be replaced later wiht firebase user
  async componentDidMount(){
      try {
        let res = await fetch('https://randomser.me/api/?inc=name,picture,location&noinfo')
      } catch(err) {
          console.log(err); 
      }
  }
  
    render() {
        if(this.state.isLoading) {
            return (
                <View style={[globalStyles.center, styles.container ]}>
                    <StatusBar barStyle="light-cotent"/>
                    <ActivityIndicator size="large"/>
                </View>
            )
        }
    return (
        <View style={styles.container}>
            <Header user={this.state.user}/>
         </View>
     )
  }
  
   
}




const styles= StyleSheet.create({
    container: {
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})


