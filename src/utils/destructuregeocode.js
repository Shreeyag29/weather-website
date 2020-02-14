const request = require('request')
const destructuregeocode = (address, callback)=>{
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic2hyZWV5YWcyOSIsImEiOiJjazZpNW1pOGwwOWtuM2pxOXlpZHJlNHRhIn0.5LLpt0PDYhWzJbdygllTTw&limit=1' 
    request({url, json:true},(error,{body})=>{
        if(error)
        {
            callback('unale to connect to location services',undefined)
        }
        else if(body.features.length===0)
        {
            callback('unable to provide location. Try aother',undefined)
        }
        else
        {
           callback(undefined,{
             latitude: body.features[0].center[1],
             longitude:body.features[0].center[0],
             location:body.features[0].place_name 
           } )
        }
        

    })
  }
  module.exports= destructuregeocode