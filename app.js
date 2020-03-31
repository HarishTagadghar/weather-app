const request = require('request'); // npm module 
const chalk = require('chalk');
const geocode = require('./utils/geocode')
const url = 'https://api.darksky.net/forecast/abd629a2a92d47e22e5f79dd28936f76/37.8267,-122.4233' // url or the weather

// request to get the weather data
request({url:url /* providing url */, json: true /* percing the respond data from json to object is set to true */}, (error,respond) => {
    if(error){
        console.log(chalk.red.inverse('server error to call weather api'));
    }else if (respond.body.error){
        console.log(chalk.red.inverse('incorrect location'));
    }else{
        console.log(chalk.green(`${respond.body.daily.summary} It is currently ${respond.body.currently.temperature} degree out`));
    }
}) // the npm module request takes two arguments the first arguments is for controle which is in a object formet and second is the callback funcion which responds error and the data

// request to get the location latitude longitude

geocode('homnabad',(error,data) => {
    console.log('error:' + error);
    console.log('data:' + data.location);
    
})