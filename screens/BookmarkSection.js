import React from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'


const BookmarkScreen =()=>{
    return (
        <View style={styles.container}>
            <Text>Book mark </Text>
            <Button 
            title="Click Here"
            onPress={()=>alert('Botton Clicked')} />
        </View>
    )
}

export default BookmarkScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});