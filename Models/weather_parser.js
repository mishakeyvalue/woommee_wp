'use strict';

const fs = require('fs');
const config = JSON.parse(fs.readFileSync(__dirname + '/config.json'));
const cities = JSON.parse(fs.readFileSync(__dirname + '/coords.json'));

const request = require('request');

module.exports.get = function (city, cb) {    
    let cityObj = cities[city];
    if(cityObj == undefined){
        cb({error : "No such city in our list."})
    }
    let rq = `${config.DarkSky.uri}/${cityObj.location.lat},${cityObj.location.lng}?lang=ru`;

    request(rq, function(err, res, body){
        cb(body);
    })
}
