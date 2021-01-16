
import { StyleSheet } from 'react-native'

export const colors ={
    darkBg:'#222',
    lightBg:'#333',
    darkHl:'#666',
    lightHl:'#888',
    orange:'#F97878',
    violetDark:'#3c1361',
    violetLight:'#663a82',
    pink:'#ea3372',
    text:"#fff",
    textSec:'#aaa',
    lightPurple:'#B589D6',
    DarkPurple:'#552586'
}

export const globalStyles = StyleSheet.create({
    sectionContainer :{
       paddingVertical :24,
       paddingHorizontal :32,
       marginBottom:8,
       backgroundColor: colors.lightBg
    },
    sectionTitle :{
        fontWeight: '700',
        color: colors.text,
        fontSize: 15
    },
    rowCenter: {
        flexDirection: 'row',
        alignContent:'center'
    },
    rowBetween :{
        flexDirection:"row",
        justifyContent:"space-between",
        
    },
    center :{
        alignItems:'center',
        justifyContent:'center'
    },
    divider :{
        borderBottomColor:"#444",
        borderBottomWidth:1,
        marginVertical: 24
    }, 
    title:{
        color: colors.text,
        fontSize: 25
    },
    subTitle:{
      fontWeight:"600",
      textTransform:"uppercase",
      color:"rgba(255, 255, 255, 0.6)",
      fontSize: 15,
      letterSpacing: 1
    },
    absoluteFull:{
        position: "absolute",
        top:0,
        left:0,
        width:'100%',
        height: '100%'
    },
    button:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:colors.pink,
        borderRadius:100
    }
})
