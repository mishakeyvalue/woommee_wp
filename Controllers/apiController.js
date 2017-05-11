const wp = require('../Models/weather_parser')
module.exports = function(app){
    app.get('/', function(req, res){
        res.end('This is my api!')
    })
    app.get('/api/:city', function(req, res){
        res.header("Content-Type", "application/json; charset=utf-8"); // encoding
        let city = req.params.city;
        res.end(JSON.stringify(wp.get(city)))
    })
}