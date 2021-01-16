const Images =[
  {image: require('../assets/banners/food10.jpg')},
  {image: require('../assets/banners/food11.jpg')},
  {image: require('../assets/banners/food12.jpg')},
  {image: require('../assets/banners/food4.jpg')},
  {image: require('../assets/banners/food5.jpg')},
  {image: require('../assets/banners/food6.jpg')},
  {image: require('../assets/banners/food7.jpg')},
  {image: require('../assets/banners/food8.jpg')},
  {image: require('../assets/banners/food9.jpg')},
]

export const markers = [
{
     coordinate:{
         latitude: 35.171885,
         longitude: 138.874501,
     },
     title: 'Vangi Sculpture Garden Museum & Restaurant',
     description: 'Vangi Sculpture Garden Museum opened on April 28, 2002, here on the hillside of Mt. Ashitaka, close to Mt. Fuji, ',
     image: Images[0].image,
     rating:5,
     reviews:109, 
},
{
    coordinate:{
        latitude: 35.118064,
        longitude: 138.9162,
    },
    title: 'French Cuisine "Gawa  MISHIMA"',
    description: 'French Cuisine where guests are indulging with the taste of various Mishima brand meet and vegitables',
    image: Images[1].image,
    rating:3,
    reviews:99, 
},
{
    coordinate:{
        latitude: 35.118751,
        longitude: 138.911994,
    },
    title: 'Sakuraーya Sea Eel',
    description: 'Japanese Trandial Sea Eal meal which you would definitely try',
    image: Images[2].image,
    rating:4,
    reviews:99, 
},
]


export const mapDarkStyle =[
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

export const mapStandardStyle = [
    {
        "elementType": "labels.icon",
        "stylers":[
            {
                "visibility":"off"
            }
        ]
    },
];