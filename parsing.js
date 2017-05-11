'use strict';
// var Stopwatch = require("node-stopwatch").Stopwatch;
// var stopwatch = Stopwatch.create();
// stopwatch.start();

const fs = require('fs');

var lineReader = require('readline').createInterface({
  input: fs.createReadStream('cities.csv')
});
let c = 0;
lineReader.on('line', function (line) {
  let city = line.split(';')[1]
  fs.appendFileSync('pure_cities.txt', city + '\n', {encoding : 'utf8'})
  console.log(city);
 // console.log(stopwatch.elapsed())
});
