import React, { PureComponent, useState, useEffect, useContext } from 'react'
import { Text, View, StyleSheet, Button, AsyncStorage } from 'react-native'
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from 'expo-location'
import { Context } from '../../context/TrackListContext'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationEvents } from 'react-navigation'
import { ListItem } from 'react-native-elements'
import { navigationn } from '../../navigtionHelper'

const  TrackList=({navigation})=> {

    const {state,fetchTrack}=useContext(Context)
    
    console.log(state.length);
    
    
        return (
            <View>
                <NavigationEvents onDidFocus={()=>{
                    fetchTrack()
                }}></NavigationEvents>
                <Text> All your trips below </Text>
                <FlatList data={state} renderItem={({item})=>{
                    return (
                        <TouchableOpacity 
                        onPress={()=>{navigationn('Trackdetail',{track:item})}}
                        style={{borderWidth:0,margin:8,borderRadius:10}}>
                        <View>
                        <ListItem friction={90} 
  tension={100} 
  activeScale={0.95} 
  linearGradientProps={{
    colors: ['#FF9800', '#F44336'],
    start: [1, 0],
    end: [0.2, 0],
  }}
  
  title={item.name}
  titleStyle={{ color: 'white', fontWeight: 'bold' }}
  subtitleStyle={{ color: 'white' }}
  
  chevron={{ color: 'white' }}
/>
                        </View></TouchableOpacity>
                    )
                }}>  <View style={{marginTop:200}}></View></FlatList>
           
            </View>
        )
    
}
const styles=StyleSheet.create({
    
})
export default TrackList
