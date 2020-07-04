import axios from "axios"
import { AsyncStorage } from "react-native"


const instance= axios.create({
    baseURL:'http://192.168.0.101:8080'
})

instance.interceptors.request.use(
  async  (config)=>{
   const token=await AsyncStorage.getItem('token')
   if(token){
     //  console.log(token);
       
       config.headers.Authorization=`Bearer ${token}`;  
   }
   return config
    },
    (err)=>{
        console.log(err.message);
        
    }

)
export default instance