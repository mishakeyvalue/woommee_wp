const osmosis = require('osmosis');

let uri = 'https://sinoptik.ua/погода-'

module.exports.get = function(city){
    osmosis
        .get(uri + city)
        .find('h1')
        .data(console.log)
    return {city : city}
}
console.log(1)
module.exports.get('Краматорск');