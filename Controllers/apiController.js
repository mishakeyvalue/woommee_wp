const wp = require('../Models/weather_parser')
module.exports = function (app) {
    app.get('/', function (req, res) {
        res.end('This is my api!')
    })
    app.get('/api/:city', function (req, res) {
        res.header("Content-Type", "application/json; charset=utf-8"); // encoding
        let city = capitalizeFirstLetter(req.params.city);
        wp.get(city, function (weather) {
            res.end(weather)
        })
    })
}
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
