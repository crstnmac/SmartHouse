import React from 'react'
import {StatusBar} from 'react-native'

import {NavigationContainer} from '@react-navigation/native'

import {GestureHandlerRootView} from 'react-native-gesture-handler'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import HomeScreen from './screens/HomeScreen'
import LivingRoom from './screens/LivingRoom'
import Fav from './screens/Fav'
import Settings from './screens/Settings'

const Tab = createMaterialTopTabNavigator()

const AppRoot = () => {
  return (
    <GestureHandlerRootView className="flex-1">
      <StatusBar translucent backgroundColor={'transparent'} />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarScrollEnabled: true,
            tabBarIndicator: () => null,
            tabBarStyle: {
              paddingTop: 40,
              backgroundColor: '#000',
            },
            tabBarItemStyle: {
              width: 'auto',
              alignItems: 'flex-start',
              paddingLeft: 28,
            },
            tabBarActiveTintColor: '#fff',
            tabBarLabelStyle: {
              fontSize: 30,
              fontFamily: 'Satoshi-Black',
              textTransform: 'capitalize',
            },
          }}
          sceneContainerStyle={{backgroundColor: '#000'}}>
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Living Room" component={LivingRoom} />
          <Tab.Screen name="Fav" component={Fav} />
          <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

export default AppRoot
