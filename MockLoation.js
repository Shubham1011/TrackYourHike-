import * as Location from 'expo-location'

const tenmeters=0.001;
const getLocation=(increment)=>{

return {

    timestamp:1000000,
    coords:{
        speed:0,
        heading:0,
        accuracy:5,
        altitude:5,
        altutudeAccuracy:5,
        latitude:19.2445484+increment*tenmeters,
        longitude:72.8694781+increment*tenmeters
    }

};

}

let counter=0;
setInterval(()=>{
    Location.EventEmitter.emit('Expo.locationChanged',{
        watchId:Location._getCurrentWatchId(),
        location:getLocation(counter)
    })
    counter++;
},1000)

