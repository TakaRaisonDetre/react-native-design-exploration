
import React, {useState, useEffect, useMemo, useReducer} from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './screens/DrawerContent'
import MainTabScreen from './screens/MainTabScreen';

import SupportScreen from './screens/SupportScreen'
import SettingScreen from './screens/SettingScreen'
import BookmarkScreen from './screens/BookmarkSection'

import RootStackScreen from './screens/RootStackScreen'
import { View, ActivityIndicator } from 'react-native';

import {AuthContext} from './components/context'
import {authContext } from './components/authContext'

import {
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme, 
  DarkTheme as NavigationDarkTheme} from '@react-navigation/native'
import {
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme} from 'react-native-paper';

import AsyncStorage from '@react-native-community/async-storage';
import {authReducer,initialLoginState} from './reducers/authReducer';

const Drawer = createDrawerNavigator();

const App =()=>{

  // const [isLoading, setIsLoading] = useState(true)
  // const [userToken, setUserToken] = useState(null)

const [isDarkTheme, setIsDarkTheme] = useState(false);

const CustomDefaultTheme  ={
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    background: '#fff',
    text:'#333333'
  }
}

const CustomDarkTheme ={
  ...NavigationDarkTheme,
  ...PaperDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    ...PaperDarkTheme.colors,
    background: '#333333',
    text:'#fff'
  }
}
const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

// create reducer by 
const [loginState, dispatch] = useReducer(authReducer, initialLoginState);


  useEffect(()=>{
    setTimeout(async()=>{
     // setIsLoading(false);
     let userToken;
     userToken=null
     try{
      userToken = await AsyncStorage.getItem('userToken')
    } catch(e) {
      console.log(e)
    }
     console.log('user token', userToken)
     dispatch({type:'RETRIEVE_TOKEN',  token:userToken})
    },1000);
  },[])

if(loginState.isLoading) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
      <ActivityIndicator size="large"/>
    </View>
  )
}


  return (
<PaperProvider theme={PaperDarkTheme}>
<AuthContext.Provider value={authContext}>
<NavigationContainer theme={theme}>
  
   {
     loginState.userToken!==null ?
     (
      <Drawer.Navigator initialRouteName="Home" drawerContent={props=> <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator> 
     ):(
      <RootStackScreen/>
     )
   }
  
    </NavigationContainer>
  </AuthContext.Provider>  
  </PaperProvider>    
  
  )
}

export default App;
