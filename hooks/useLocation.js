import { useState, useEffect } from "react";
import { requestPermissionsAsync, watchPositionAsync, Accuracy } from "expo-location";


export default (shouldTrack,callback)=>{
    
  const [sub,setSub]=useState(null)
    const[e,setErr]=useState('')
    const startWatching = async () => {
        try {
          const { granted } = await requestPermissionsAsync();
          if (!granted) {
            throw new Error('Location permission not granted');
          }else{
            
          }
        const subscriber= await watchPositionAsync({
             accuracy:Accuracy.BestForNavigation,
             distanceInterval:10,
             timeInterval:1000
         },
         callback
         )
        setSub(subscriber) 
        } catch (e) {
          setErr(e);
        }
      };
      
    useEffect( ()=>{
        
    if(shouldTrack){
          
    
          startWatching()
    }
    else{
sub.remove();
setSub(null)
    }        
  
    return ()=>{
      if(sub){
        sub.remove()
      }
    }
    
       
  },[shouldTrack,callback])

        return [e];

}