import React, { PureComponent, useState, useContext, useEffect } from 'react'
import { View, StyleSheet, Button } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext'
import { Text,Input } from 'react-native-elements'
import AuthForm from '../../component/AuthForm'
import { navigationn } from '../../navigtionHelper'
import { NavigationEvents } from 'react-navigation'


const Signin=({navigation})=> {
const [username,setUsername]=useState('')
const [password,setPassword]=useState('')
const {state,signin,clearError,trylocalsignin}=useContext(AuthContext)

useEffect(()=>{

    
    trylocalsignin()

},[])

const callback=()=>{
    navigation.navigate('authflow')
}

        return (
            <View style={{flex:1}}> 
            <NavigationEvents 
            onWillFocus={()=>{
                alert('jallo')
                clearError();
            }}
                              onWillBlur={()=>{

                                alert('jello')
                                clearError()
                              }}
                              ></NavigationEvents>
            <AuthForm data={state} username={username} password={password} signup={signin}  callback={callback}>
           </AuthForm>
           <Button onPress={()=>{navigationn('SignUp')}} title="No Account"></Button>
            </View>
            
        )
    
}


Signin.navigationOptions=()=>{
    return {
        header:()=>false
    }
}
const styles=StyleSheet.create({
    
})
export default Signin
