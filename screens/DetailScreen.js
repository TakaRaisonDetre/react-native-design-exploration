import React from 'react'
import { View, Text , Button } from 'react-native'


const DetailScreen = ({navigation}) =>{
    return (
      <View style={styles.container}>
     <Text> Detail Screen</Text>
     <Button 
     onPress={()=>navigation.push("detail")}
     title="Go to details sreen... again"/>
       <Button 
     onPress={()=>navigation.navigate("Home")}
     title="Go to home"/>
       <Button 
     onPress={()=>navigation.goBack()}
     title="Go back"/>
      <Button 
     onPress={()=>navigation.popToTop()}
     title="Go to the first screen"/>
      </View>
      
    )
   }

   export default DetailScreen




const styles = {
    container:{
      flex:1,
      alignItems:'center',
      justifyContent: 'center',
    }
    
    
  }