import React from 'react'
import { View, Text, Button, StatusBar } from 'react-native'
import {ThemeProvider, useTheme} from '@react-navigation/native'

const HomeScreen = ({navigation}) =>{

const {colors} = useTheme();
const theme = useTheme();

    return (
      <View style={styles.container}>
        <StatusBar barStyle={theme.dark? "light-content":"dark-content"}/>
     <Text stlye={{color:colors.text}}> Home Screen</Text>
      <Button 
      onPress={()=>navigation.navigate("detail")}
      title="Go to details"/>
      </View>
    );
   };

export default HomeScreen




const styles = {
    container:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
    }
    
    
  }