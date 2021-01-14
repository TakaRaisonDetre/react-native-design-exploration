
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent} from './screens/DrawerContent'
import MainTabScreen from './screens/MainTabScreen';

import SupportScreen from './screens/SupportScreen'
import SettingScreen from './screens/SettingScreen'
import BookmarkScreen from './screens/BookmarkSection'

const Drawer = createDrawerNavigator();

const App =()=>{

  return (
  <NavigationContainer>
   <Drawer.Navigator initialRouteName="Home" drawerContent={props=> <DrawerContent {...props}/>}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingScreen" component={SettingScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

export default App;
