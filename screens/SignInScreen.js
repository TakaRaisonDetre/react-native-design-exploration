import React, {useState} from 'react'
import { View, 
    Text,  
    StyleSheet, 
    TextInput, 
    Dimensions, 
    TouchableOpacity, 
    Platform,
    StatusBar } from 'react-native'

import * as Animatable from 'react-native-animatable'

import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import{ AuthContext} from '../components/context'

const SignInScreen = ({navigation}) =>{

const [data, setData] = useState({
    email:'',
    password:'',
    check_textInputChange:false,
    secureTextEntry:true
})

const {signIn} = React.useContext(AuthContext)

const textInputChange=(val) =>{
    if(val.length!==0) {
        setData({
            ...data,
            email: val,
            check_textInputChange:true
        });
    }else {
        setData({
            ...data,
            email: val,
            check_textInputChange:false
        });
    }
}

const handlePasswordChange = (val)=>{
    setData({
        ...data,
        password:val
    })
}

const updateSecureTextEntry = () =>{
    setData({
        ...data,
        secureTextEntry:!data.secureTextEntry
    })
}


const loginHandle = (username, password)=>{
  signIn(username, password);
}

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#fff" barStyle="light-content"/>
           <View style={styles.header}>
               <Text style={styles.text_header}>Welcome</Text>
           </View>
           <Animatable.View 
           animation="fadeInUpBig"
           style={styles.footer}>
               <Text style={styles.text_footer_mail}>Email</Text>
               <View style={styles.action}>
                   <FontAwesome
                   name="user-o"
                   color="#05375a"
                   size={17} />
                   <TextInput 
                   placeholder="Your Email"
                   style={styles.textInput}
                   autoCapitalize="none"
                   onChangeText={(val)=>textInputChange(val)}
                   />
                   {data.check_textInputChange? 
                   <Animatable.View
                   animation="bounceIn"
                   >
                   <Feather
                   name="check-circle"
                   color="green"
                   size={18} />
                   </Animatable.View>
                    : null }   
               </View>
               


               <Text style={styles.text_footer_password }>Password</Text>
               <View style={styles.action}>
              
                   <Feather
                   name="lock"
                   color="#05375a"
                   size={18} />
                   <TextInput 
                   secureTextEntry={data.secureTextEntry ? true :false }
                   placeholder="Password"
                   style={styles.textInput}
                   autoCapitalize="none"
                   onChangeText={(val)=>handlePasswordChange(val)}
                   />
                    <TouchableOpacity
                     onPress={updateSecureTextEntry}
                    >
                        {data.secureTextEntry ? 
                          <Feather
                             name="eye-off"
                            color="grey"
                             size={18} />
                             :
                             <Feather
                             name="eye"
                            color="grey"
                             size={18} />
                            }
                    </TouchableOpacity>
               </View>

           <TouchableOpacity
            
             style={[styles.signIn, {
                 backgroundColor:'#05375a',
                 marginTop:15,}]}
                 onPress={()=>{loginHandle(data.email, data.password)}}    
             >
                 <Text style={[styles.textSign, {color:"#fff"}]}>Sign In</Text>
             </TouchableOpacity>     

             <TouchableOpacity
             onPress={()=>navigation.navigate('SignUpScreen')}
             style={[styles.signIn, {
                 borderColor:'#05375a',
                 borderWidth:1,
                 marginTop:15
             }]}
             >
                 <Text style={styles.textSign, {color:'#05375a'}}>Sign Up</Text>
             </TouchableOpacity>

           </Animatable.View>
        </View>
    )
}
export default SignInScreen




const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#272a27'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer_mail: {
        color: '#05375a',
        fontSize: 18
    },
    text_footer_password: {
        color: '#05375a',
        fontSize: 18,
        marginTop:35
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
