import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'


const SettingScreen =()=>{
    return (
        <View style={styles.container}>
            <Text>Setting mark </Text>
            <Button 
            title="Click Here"
            onPress={()=>alert('Botton Clicked')} />
        </View>
    )
}

export default SettingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});