import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signin from './src/screen/Signin';

import TrackCreate from './src/screen/TrackCreate';
import TrackList from './src/screen/TrackList';
import Account from './src/screen/Account';
import Trackdetail from './src/screen/Trackdetail';
import Signup from './src/screen/Signup';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { Provider as Auther } from './context/AuthContext';
import { Provider as TrackProvider } from './context/TrackListContext';
import { Provider as LocationProvider } from './context/LocationContext';
import { navigation } from './navigtionHelper';
import loadingscreen from './src/screen/loadingscreen';

const navigator=createSwitchNavigator({

  loginflow:createStackNavigator({
    loadingscreen:loadingscreen,
    SignIn:Signin,
    SignUp:Signup
  }),
  authflow:createBottomTabNavigator({
    
    TrackListFlow:createStackNavigator({
      TrackList:TrackList,
      Trackdetail:Trackdetail
    }),TrackCreate:TrackCreate,
    Account:Account,
  })

})

const App=createAppContainer(navigator)
export default ()=>{
  return (
    <TrackProvider>
    <LocationProvider>
      <Auther>  
      <App ref={(navigator)=>navigation(navigator)} ></App>
    </Auther>
    </LocationProvider>
    </TrackProvider>
    
  )
}