import createDataContext from "./createDataContext"
import Tracker from "../api/Tracker"
import { AsyncStorage } from "react-native"
import { navigationn } from "../navigtionHelper"


const authReducer=(state,action)=>{
switch(action.type){
    case 'signin':
        return {...action,token:action.payload}

    case 'adderror':
        return {...action,errormessage:action.payload}
    
    case 'clearerror':
        return {...action,errormessage:action.payload}
    
    case 'logout':
        return {...action,token:null}

    default:
        return state
}




}


const logout=(dispatch)=>{

    return  async()=>{
        AsyncStorage.removeItem('token')
       await  dispatch({type:'logout',payload:''})

       navigationn('loginflow')

    }
}

const trylocalsignin= (dispatch)=>{

   

    return async ()=>{
        const token=  await AsyncStorage.getItem('token')
        console.log('called me');
        
        if(token){
            dispatch({type:'signin',payload:token})
            navigationn('authflow')
        }else{
            navigationn('SignIn')
        }
    }
}

const signup=(dispatch)=>{

    return async ({username,password,callback})=>{
     
                      console.log("inside auth context username and password is"+username+password);
       
                      
        Tracker.post('/signup',{username:username,password:password}).then((res)=>{
           alert('Sign In Successfull');
           
               
              navigationn('SignIn') 

        }).catch((e)=>{
            dispatch({type:'adderror',payload:e.message})
        })
        

    }

}

const clearError=(dispatch)=>{

return ()=>{

    console.log('clearnig message');
    
    dispatch({type:'clearerror',payload:''})
}

}

const signin=(dispatch)=>{
    return async ({username,password,callback})=>{
     
         console.log(username+' '+password);
         
        await Tracker.post('/signin',{username:username,password:password}).then((res)=>{
            alert('Sign In Successfull'+res.data.token);
            AsyncStorage.setItem('token',res.data.token)
            console.log('alsa');
            
            dispatch({type:'signin',payload:res.data.token})
        
           navigationn('authflow')
 
         }).catch((e)=>{
             console.log("error called");
             
             if(e)
             dispatch({type:'adderror',payload:e.message})
            

             
             
 
         });
         
         
         
 
     }
 
}
const signout=()=>{
    
}



export const {Context,Provider}=createDataContext(authReducer,{logout,signup,signin,signout,clearError,trylocalsignin},{token:null,errormessage:''})

