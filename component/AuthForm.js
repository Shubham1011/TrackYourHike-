import React, { Component, useState, useEffect } from 'react'
import { Text, View, Button } from 'react-native'
import { Input } from 'react-native-elements'

const AuthForm=({data,signup,callback,username,password})=> {
    const [username1,setUsername]=useState(username)
    const [password1,setPassword]=useState(password)
  
    

        return (
            <View style={{justifyContent:"center",flex:1}}>
            <Text style={{alignSelf:"center"}} h3>Welcome Hiker !! </Text>
    <Text style={{alignSelf:"center"}} h5>Sign Up Below to get running </Text>
            <Input value={username1}  label='Username' onChangeText={(val)=>setUsername(val)}></Input>
            <Input label='Password' value={password1} secureTextEntry={true}  onChangeText={(val)=>{setPassword(val)}}></Input>
            <Text>{data.errormessage} hello</Text>
            <Button title='Sign Up' onPress={()=>{ 
                console.log('username and password are'+username1+password1);
                
                signup({username:username1,password:password1,callback})
                 console.log(data);
                 
        }}></Button>
       
            
        </View>
        )
    }
export default AuthForm
