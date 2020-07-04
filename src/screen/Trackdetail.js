import React, { PureComponent } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps'

const Trackdetail=({navigation})=> {
    
    const data=navigation.getParam('track')
        return (
            <View>
                
                <MapView style={{height:500}} initialRegion={{latitudeDelta:0.01,longitudeDelta:0.01,...data.locations[0].coords}}>
                    <Polyline coordinates={data.locations.map((t)=>t.coords)}></Polyline>
                </MapView>
            </View>
        )
    
}
const styles=StyleSheet.create({
    
})
export default Trackdetail
