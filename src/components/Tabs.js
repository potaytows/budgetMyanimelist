import React, { useEffect, useState } from 'react';
import AllAnimeScreen from '../screens/AllAnimeScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';



const Tab = createBottomTabNavigator()

const Tabs = () => {

  return (
      <Tab.Navigator>
          <Tab.Screen name={'Home'} component={AllAnimeScreen} options={{headerShown:false}}/>
      </Tab.Navigator>

  )
}


export default Tabs
