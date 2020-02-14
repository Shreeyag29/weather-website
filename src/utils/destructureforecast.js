const request = require('request')
const destructureforecast = (latitude,longitude,callback)=>{
    const url ='https://api.darksky.net/forecast/fec82098f68c458d596651b220ce06bd/'+latitude+','+longitude
    request({url,json:true},(error, {body})=>{
        if(error)
        {
            callback('Unable to connect to weather service',undefined)
        }

        else if(body.error)
        {
             callback('unable to find location',undefined) 
        }

        else
        {   //destructuring
            callback(undefined,body.daily.data[0].summary+" It is currently "+ body.currently.temperature+" degrees out. "+"There is a "+body.currently.precipProbability+" % "+"chance of rain")
        }

    })
}
module.exports = destructureforecast
