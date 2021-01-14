
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainTabScreen from './screens/MainTabScreen';
import {DrawerContent} from './screens/DrawerContent'

const Drawer = createDrawerNavigator();

const App =()=>{

  return (
  <NavigationContainer>
   <Drawer.Navigator initialRouteName="Home" drawerContent={props=> <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={MainTabScreen} />
        {/* <Drawer.Screen name="detail" component={DetailStackScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
