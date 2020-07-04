import React, { Component, useState, useContext } from 'react'
import { Text, Input, Button } from 'react-native-elements'
import { View } from 'react-native'
import { Context  as AuthContext} from '../../context/AuthContext'
import AuthForm from '../../component/AuthForm'
import { NavigationEvents } from 'react-navigation'
import { navigationn } from '../../navigtionHelper'


 const Signup=({navigation})=>{

const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
const {state,signup,clearError}=useContext(AuthContext)
const callback=()=>{
    navigation.navigate('SignIn')
}





        return (
            <View style={{flex:1}}>
         <NavigationEvents onWillBlur={()=>{
             alert('jello')
             console.log('cleaing you up')
             clearError()}}></NavigationEvents>
            <AuthForm data={state}   username={username} password={password}  signup={signup} callback={callback}></AuthForm>
            <Button title='Already have an account' onPress={()=>{
            navigationn('SignIn')
            }}></Button>
            </View>
        )
    }

 Signup.navigationOptions=()=>{
     return{
         header:()=>false
     }
 }   

export default  Signup