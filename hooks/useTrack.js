import { useContext } from "react"
import { Context  as TrackListContext} from "../context/TrackListContext"
import { Context } from "../context/LocationContext"
import { navigationn } from "../navigtionHelper"

export default ()=>{


    const {state,createTrack}=useContext(TrackListContext)
    const {state:{name,location},reset}=useContext(Context)
    
     

    const saveTracke=async ()=>{

      await  createTrack(name,location)
     reset();
     navigationn('TrackList')
    }

    return saveTracke



}