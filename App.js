
import React, {useState, useEffect, useMemo, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './screens/DrawerContent'
import MainTabScreen from './screens/MainTabScreen';

import SupportScreen from './screens/SupportScreen'
import SettingScreen from './screens/SettingScreen'
import BookmarkScreen from './screens/BookmarkSection'

import RootStackScreen from './screens/RootStackScreen'
import { View, ActivityIndicator } from 'react-native';
import {AuthContext} from './components/context'

const Drawer = createDrawerNavigator();

const App =()=>{

  // const [isLoading, setIsLoading] = useState(true)
  // const [userToken, setUserToken] = useState(null)

const initialLogiState ={
  isLoading :true,
  userName:null,
  userToken:null,
}

// set reducer 
const loginReducer = (prevState, action )=>{
   switch(action.type ) {
     case 'RETRIEVE_TOKEN':
       return {
         ...prevState,
         userToken:action.token,
         isLoading:false,
       }
     case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading:false,
        }
     case 'LOGOUT':
       return {
        ...prevState,
        userName: null,
        userToken: null,
        isLoading:false,
       }
     case 'REGISTER':
       return {
        ...prevState,
        userName: action.id,
        userToken: action.token,
        isLoading:false,
       }  

   }

}

// create reducer by 
const [loginState, dispatch] = useReducer(loginReducer, initialLogiState);


const authContext = useMemo(()=>({
  signIn: (userName, password)=>{
    //  setUserToken('faasdfasd')
    //  setIsLoading(false)
    let userToken;
    userToken=null
if(userName=='user' && password=='pass') {
  userToken ='asdfaser233sdvqw3rvawef'
}
console.log('user token', userToken)
   dispatch({type:'LOGIN', id: userName , token:userToken})
  },
  signUp: ()=>{
    setUserToken('faasdfasd')
    setIsLoading(false)
  },
  signOut:()=>{
    // setUserToken(null);
    // setIsLoading(false)
    dispatch({type:'LOGOUT'})
  }
}),[]);

  useEffect(()=>{
    setTimeout(()=>{
     // setIsLoading(false);
     let userToken;
     userToken='awerwf;'
     console.log('user token', userToken)
     dispatch({type:'RETRIEVE_TOKEN',  token:userToken})
    },1000)
  },[])

if(loginState.isLoading) {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}> 
      <ActivityIndicator size="large"/>
    </View>
  )
}


  return (
<AuthContext.Provider value={authContext}>
<NavigationContainer>
  
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
  
  )
}

export default App;
