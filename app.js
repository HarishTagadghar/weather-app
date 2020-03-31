const chalk = require('chalk');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// request to get the location latitude longitude

let address = process.argv[2] 
if(!address){
    console.log('provide a address');
}else{
    geocode(address  ,(error,data) => {
        if(error){
           return console.log(error);
        }
            forecast(data.longitude,data.latitude,(error,forecastdata) => {
                if (error){
                    return console.log(error);    
                }
                console.log(data.location);
                console.log(forecastdata);      
            })
        })
        
        
}
