'use strict';


const fs = require('fs');
const CONFIG = JSON.parse(fs.readFileSync('./Models/config.json'));
let https = require('https');
let utf8 = require('utf8');
let request = require('request');


var lineReader = require('readline').createInterface({
    input: fs.createReadStream('pure_cities.txt')
});
let c = 0;

let cities = {};
let arr = []
lineReader.on('line', function (city) {
    arr.push(city);

});
lineReader.on('close', function () {
    c++;
    setInterval(go, 1000)
});

function go() {
    if (arr.length > 0) {
        
        let city = arr.pop();
        let googleApi = `${CONFIG.Google.uri}?address=${city}&key=${CONFIG.Google.token}&language=ru`;
        googleApi = utf8.encode(googleApi);
        request(googleApi, (err, response, body) => {
            try {
                let loc = JSON.parse(body)['results'][0]['geometry']['location'];
                cities[city] = { location: loc };
                if (c % 25 == 0) {
                    console.log('Writing to file..')
                    fs.writeFileSync('cities_coords.json', JSON.stringify(cities))
                }
            }
            catch (e) {
                console.log(body)
                console.log('****' + e + city);

            }

        })
        if(arr.length%10==0){
            console.log("Writing..")
            fs.writeFileSync('coords.json', JSON.stringify(cities))
        }

    }

}



let city = "Краматорск"

