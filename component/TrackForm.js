import React, { Component, useContext } from 'react'
import { Text, View, KeyboardAvoidingView } from 'react-native'
import { Input, Button } from 'react-native-elements'
import {Context as LocationContext} from '../context/LocationContext'
import useTrack from '../hooks/useTrack'
import { Context } from '../context/TrackListContext'

const TrackForm =()=>{
    const {state:{name,record,location},startRecording,stopRecording,addlocation,changeName}=useContext(LocationContext)
    const {createTrack}=useContext(Context)
    //console.log(location.length);
    
const saveTracke=useTrack()    

    

    return (
            <View>
              <KeyboardAvoidingView>
            { !record ? <Input label='Trip Name' onChangeText={(val)=>{changeName(val)}} placeholder='Eg. Shrewsberry Forest hike'></Input>:null}
              {!record ?  <Button title='Start Recording' onPress={()=>{startRecording()}}></Button> :
              <Button title='Stop' onPress={()=>{stopRecording()}}></Button>}
              { !record && location.length ? <Button title='Save' onPress={()=>{saveTracke()}} style={{marginTop:30}}></Button>:null }
              <Text>{name}</Text>
              </KeyboardAvoidingView>
            </View>
        )
    }

export default TrackForm