import React from 'react'
import { View, Text, Button } from 'react-native'


const HomeScreen = ({navigation}) =>{
    return (
      <View style={styles.container}>
     <Text> Home Screen</Text>
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