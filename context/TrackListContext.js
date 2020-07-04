import createDataContext from "./createDataContext"
import { useState } from "react";
import TrackCreate from "../src/screen/TrackCreate";

 import Tracker from '../api/Tracker'

const locationreducer=(state,action)=>{

    
    switch(action.type){
        case 'addtoarray':
            //.log(state.length);
            
            return action.payload
        default:
            return state
    }




}

const fetchTrack=(dispatch)=>{
    return async()=>{

        const tracks=await Tracker.get('/gettracks').then(res=>{
             console.log('ithe aloo');
             
             
            dispatch({type:'addtoarray',payload:res.data})
             // console.log(res);
              

        }).catch(err=>{
            console.log(err.message);
            
        })
        
       
        
    }
}
    const createTrack=(dispatch)=>{
        return async (name,locations)=>{
            
            await Tracker.post('/tracks',{name,locations}).then((res=>{
                
                alert('Trip saved successfully')
            })).catch(e=>{
              console.log(e);
              
            })

        }

}

export const {Context,Provider}=createDataContext(locationreducer,{fetchTrack,createTrack},[])
