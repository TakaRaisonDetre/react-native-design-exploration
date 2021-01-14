import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import HomeScreen from './screens/HomeScreen'
import DetailScreen from './screens/DetailScreen'
import  Icon  from 'react-native-vector-icons/Ionicons';



const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Drawer = createDrawerNavigator();

const HomeStackScreen = ({navigation}) =>{
  return (
<HomeStack.Navigator screenOptions={{
       headerStyle :{
         backgroundColor: '#009387',
       },
       headerTintColor:'#fff',
       headerTitleStyle:{
         fontWeight:'500'
       }
     }}>
     <HomeStack.Screen name='home' component ={HomeScreen} options={{
       title:"Overview",
       headerLeft :()=>(
         <Icon.Button name='ios-menu' size={25} backgroundColor="#009387" 
         onPress={()=>navigation.openDrawer()}></Icon.Button>
       )
       }}/>
    
   </HomeStack.Navigator>
  )
}


const DetailStackScreen = ({navigation}) =>{
 return (
  <DetailStack.Navigator screenOptions={{
    headerStyle :{
      backgroundColor: '#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'500'
    }
  }}>
  <DetailStack.Screen name='detail' component ={DetailScreen} options={{
      headerLeft :()=>(
        <Icon.Button name='ios-menu' size={25} backgroundColor="#009387" 
        onPress={()=>navigation.openDrawer()}></Icon.Button>
      )
  }}/>
 
</DetailStack.Navigator>
 )
  }
  

const App =()=>{
  return (
  <NavigationContainer>


   <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeStackScreen} />
        <Drawer.Screen name="detail" component={DetailStackScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
