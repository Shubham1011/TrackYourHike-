import createDataContext from "./createDataContext"
import { useState } from "react";

 

const locationreducer=(state,action)=>{

    
    switch(action.type){
        case 'addlocation':
            return {...state,currentLocation:action.payload}
        case 'srecord':
            return {...state,record:true}
        case 'strecord':
            return {...state,record:false}
        case 'addtoarray':
            return {...state,location:[...state.location,action.payload]}
        case 'namechange':
            return {...state,name:action.payload}
            case 'reset':
                return {...state,name:'',location:[]}
        default:
            return state
    }




}

const startRecording=(dispatch)=>{
    return ()=>{
        dispatch({type:'srecord',payload:true})
    }
}
const stopRecording=(dispatch)=>{
    return ()=>{
        dispatch({type:'strecord',payload:false})
    }
}

const changeName=(dispatch)=>{
    return (name)=>{
        dispatch({type:'namechange',payload:name})
    }
}

const reset=(dispatch)=>{
    return ()=>{
        dispatch({type:'reset'})
    }
}

const addlocation=(dispatch)=>{
    return (location,recording)=>{
        dispatch({type:'addlocation',payload:location})
        if(recording)
        dispatch({type:'addtoarray',payload:location})
    }
}

export const {Context,Provider}=createDataContext(locationreducer,{reset,changeName,addlocation,startRecording,stopRecording},{name:'',location:[],currentLocation:null,record:false})
