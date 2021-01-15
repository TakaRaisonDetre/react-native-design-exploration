
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './HomeScreen'
import DetailScreen from './DetailScreen'
import ExploreScreen from './ExploreScreen'
import ProfileScreen from './ProfileScreen'
import  Icon  from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator();
const DetailStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = ()=>{
    return (
  <Tab.Navigator
      initialRouteName="Feed"
      activeColor="#fff"
      
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#272a27',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={18} />
          ),
        }}
      />
       <Tab.Screen
        name="detail"
        component={DetailStackScreen}
        options={{
          tabBarLabel: 'detail',
          tabBarColor: '#4e544e',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notification" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#757f75',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={18} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#9fa69f',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={18} />
          ),
        }}
      />
    </Tab.Navigator>

    )
    }

export default MainTabScreen

const HomeStackScreen = ({navigation}) =>{
  return (
<HomeStack.Navigator screenOptions={{
       headerStyle :{
         backgroundColor: '#272a27',
       },
       headerTintColor:'#fff',
       headerTitleStyle:{
         fontWeight:'500'
       }
     }}>
     <HomeStack.Screen name='home' component ={HomeScreen} options={{
       title:"Overview",
       headerLeft :()=>(
         <Icon.Button name='ios-menu' size={25} backgroundColor="#272a27" 
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
      backgroundColor: '#272a27',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'500'
    }
  }}>
  <DetailStack.Screen name='detail' component ={DetailScreen} options={{
      headerLeft :()=>(
        <Icon.Button name='ios-menu' size={25} backgroundColor="#272a27" 
        onPress={()=>navigation.openDrawer()}></Icon.Button>
      )
  }}/>
 
</DetailStack.Navigator>
 )
  }
  