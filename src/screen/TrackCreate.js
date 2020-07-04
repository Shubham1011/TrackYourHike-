import React, { PureComponent, useState, useContext, useCallback } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import MyMap from '../../component/MyMap'
import useLocation from   '../../hooks/useLocation'
import '../../MockLoation'
import { add } from 'react-native-reanimated'
import {Context as LocationContext} from '../../context/LocationContext'
import TrackForm from '../../component/TrackForm'
const TrackCreate=({isFocused})=> {
 const {startRecording,stopRecording,addlocation,record,state}=useContext(LocationContext)
 const callbacker=useCallback((location)=>{
   addlocation(location,state.record)
 },[state.record])
const [err]=useLocation(isFocused || state.record,callbacker)



    
        return (
            <SafeAreaView forceInset={{top:'always'}}>
            <View>
              <MyMap ></MyMap>
              <Text></Text>
         <TrackForm></TrackForm>
            </View>
            </SafeAreaView>
        )
    
}
const styles=StyleSheet.create({
    
})
export default withNavigationFocus(TrackCreate)
