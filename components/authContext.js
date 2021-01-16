import AsyncStorage from '@react-native-community/async-storage';
import React,{useMemo, useReducer} from 'react';
import AsyncStorage from '@react-native-community/async-storage'
import {authReducer,initialLoginState} from './reducers/authReducer';

const [isDarkTheme, setIsDarkTheme] = useState(false);


const [loginState, dispatch] = useReducer(authReducer, initialLoginState)


export const authContext = useMemo(()=>({
   //  Auth Related Memoization 
    signIn: async(userName, password)=>{
       let userToken;
       userToken:null;
       if(userName==='user' && password ==='pass'){
           try{
            userToken ='asdfaser233sdvqw3rvawef'
            await AsyncStorage.setItem('userToken', userToken)
           } catch(err) {
               console.log(err)
           }
           console.log('user Token', userToken)
          dispatch({type:'LOGIN', id: userName, token: userToken})
       }
    },
    signUp: async()=>{
        setUserToken('faasdfasd')
        setIsLoading(false)
    },
    signOut :async() =>{
       try {
         await AsyncStorage.removeItem('userToken')
       }catch(e) {
          console.log(e)
       }
        dispatch({type:'LOGOUT'})
    },
  
    // Theme Related Memoization
    toggleTheme :() =>{
       setIsDarkTheme(isDarkTheme=> !isDarkTheme)
    }
}),[])