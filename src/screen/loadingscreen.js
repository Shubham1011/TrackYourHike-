import React, { Component, useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { Context as AuthContext } from '../../context/AuthContext'

const loadingscreen =()=> {
    
    const {state,signin,clearError,trylocalsignin}=useContext(AuthContext)

useEffect(()=>{

    trylocalsignin()

},[])
        return (
            <View>
                
            </View>
        )
    }

    loadingscreen.navigationOptions=()=>{
        return {
            header:()=>true
        }
    }

    export default loadingscreen
