const request = require('request')


const forecast=(latitude,longitude,callback)=>{
  const url ='http://api.weatherstack.com/current?access_key=7267bcb687c57af0d04dc4b62dbf812e&query=' + latitude +',' + longitude + '&units=m'
   request({ url , json : true},(error,{body})=>{
       if(error){
             callback('unable',undefined)
       }else if (body.error){
        callback('unable',undefined)
       }else{
          callback(undefined,body.current.weather_descriptions[0] +    ' . temp is currently '+ body.current.temperature + ' but feels like ' + body.current.feelslike)
       }
   })
  

}

module.exports=forecast