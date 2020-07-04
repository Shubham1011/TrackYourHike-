import React, { PureComponent, useContext } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import { Button } from 'react-native-elements'
import { SafeAreaView } from 'react-navigation'
import { Context as AuthContext } from '../../context/AuthContext'

const Account=()=> {

    const {logout}=useContext(AuthContext)
  
    const logmeout=()=>{
        Alert.alert('Logout ?','Are you sure',[{
       text:'Yes',
       style:'destructive',
       onPress:()=>{
           logout()
       }
        },{
text:'No',
style:"cancel"
        }])
    }

    
    
        return (
            <SafeAreaView forceInset={{top:'always'}}>
            <View>
                <Button  onPress={()=>{logmeout()}}  title='Log out'></Button>
            </View>
            </SafeAreaView>
        )
    
}
const styles=StyleSheet.create({
    
})
export default Account
