'use strict';

const fs = require('fs');
const config = JSON.parse(fs.readFileSync('./config.json'));

const request = require('request');

const cities = { "Краматорск": {"latitude" : "50.1053867", "longitude" : "36.4558124"} }

module.exports.get = function (city, cb) {
    let cityObj = cities[city];
    let rq = `${config.DarkSky.uri}/${cityObj.latitude},${cityObj.longitude}?lang=ru`;
    request(rq, function(err, res, body){
        console.log(body)
    })
}


module.exports.get('Краматорск');