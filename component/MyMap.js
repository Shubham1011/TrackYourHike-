import React, { Component, useEffect, useState, useContext } from 'react'
import { Text, View, StyleSheet, ActivityIndicator } from 'react-native'
import MapView, { Polyline, MarkerAnimated, Circle } from 'react-native-maps'
import { requestPermissionsAsync } from 'expo-location'
import { NavigationEvents } from 'react-navigation'
import { Logs } from 'expo'
import { set } from 'react-native-reanimated'
import {Context as LocationContext} from '../context/LocationContext'
const MyMap =()=>{
    const {startRecording,stopRecording,addlocation}=useContext(LocationContext)
    const {state:{name,currentLocation,location}}=useContext(LocationContext)
    
   
 if(!currentLocation){
     return <ActivityIndicator size='large' style={{marginTop:100}}></ActivityIndicator>
 }

        return (
            <View>
                <NavigationEvents 
                ></NavigationEvents>
                <MapView style={styles.mymap} initialRegion={{...currentLocation.coords,latitudeDelta:0.1,longitudeDelta:0.1}}
                
                >
                    
                   <Circle 
                   center={currentLocation.coords}
                   strokeColor="rgba(158,158,255,1.0)"
                   radius={30}
                   fillColor="rgba(158,158,255,0.3)"
                   ></Circle>
                   <Polyline coordinates={location.map((l)=>l.coords)}></Polyline>
                </MapView>
              


            </View>
        )
    }

    const styles=StyleSheet.create({
        mymap:{
            height:500,
               
        }
    })

    export default MyMap
