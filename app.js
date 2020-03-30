const request = require('request'); // npm module 
const chalk = require('chalk')
const url = 'https://api.darksky.net/forecast/abd629a2a92d47e22e5f79dd28936f76/37.8267,-122.4233' // url or the weather
const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiaGFyaXNodGFnYWRnaGFyIiwiYSI6ImNrOGVxdXU5NjAyaWszaG14b3BqYzcyYTYifQ.YK_od5JUCDsS3Uq_6TTzPA'

// request to get the weather data
request({url:url /* providing url */, json: true /* percing the respond data from json to object is set to true */}, (error,respond) => {
console.log(chalk.green(`${respond.body.daily.summary} It is currently ${respond.body.currently.temperature} degree out`));

}) // the npm module request takes two arguments the first arguments is for controle which is in a object formet and second is the callback funcion which responds error and the data

// request to get the location latitude longitude

request({url: geocodeurl, json: true}, (error,respond) => {
    let longitude = respond.body.features[0].center[0]
    let latitude = respond.body.features[0].center[1]
    console.log(chalk.red(`los angeles longitude ${longitude} and latitude is ${latitude}`));
    
    
})