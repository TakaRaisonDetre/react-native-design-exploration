import React from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    ScrollView,
    Animated,
    Image,
    TouchableOpacity,
    Dimensions,
    Platform,
  } from "react-native";
  import MapView, {PROVIDER_GOOGLE, Marker, Callout} from "react-native-maps";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const mapDarkStyle =[
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f5f5"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ffffff"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dadada"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e5e5e5"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#eeeeee"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#c9c9c9"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    }
  ]

const mapStandardStyle = [
    {
        "elementType": "labels.icon",
        "stylers":[
            {
                "visibility":"off"
            }
        ]
    },
];



const ExploreScreen =()=>{
   return (
       
           <MapView
             provider={PROVIDER_GOOGLE}
             style={styles.map}
             customMapStyle={mapDarkStyle}
             region={{
                 latitude:35.646572,
                 longitude:139.653244,
                 latitudeDelta:0.015,
                 longitudeDelta:0.0121,
             }}
             >
                 <Marker 
                 coordinate={{
                    latitude:35.646572,
                    longitude:139.653244,
                 }}
                 title ="Test Title"
                 description="This is the test description"
                 >
                 <Callout tooltip>
                     <View>
                         <View style={styles.bubble}>
                          <Text style={styles.name}>Favorite Restaurant</Text>
                          <Text>A short description</Text>
                          <Image 
                          style={styles.image}
                          source={require('../assets/logo.png')}
                          />
                         </View>
                         <View style={styles.arrowBorder}/>
                         <View style={styles.arrow}/>
                     </View>
                 </Callout></Marker>
             </MapView>
      
   )
}

export default ExploreScreen


const styles=StyleSheet.create({
    map:{
        height: '100%'
    },
  
    // Call out bubble
    bubble:{
        flexDirection:'column',
        alignSelf:'flex-start',
        backgroundColor:'#fff',
        borderRadius:6,
        borderColor:'#ccc',
        borderWidth:0.5,
        padding:15,
        width:150,
    },
    // Arrow before the bubble
    arrow:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        borderTopColor:'#fff',
        borderWidth:16,
        alignSelf:'center',
        marginTop:-32,
    },
    arrowBorder:{
        backgroundColor:'transparent',
        borderColor:'transparent',
        borderTopColor:'#007a87',
        borderWidth:16,
        alignSelf:'center',
        marginTop:-0.5,
    },
    // Character name
    name: {
        fontSize:16,
        marginBottom:5,
    },
    //Character image
    image :{
        width:120,
        height:80,
    }

})