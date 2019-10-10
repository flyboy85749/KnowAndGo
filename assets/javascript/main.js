

// require axios
const axios = require("axios");

var weather = require('weather-js');


var scrapeNotams = require('@ryanburnette/scrape-notams');

// single airport
//  scrapeNotams('KTUS')
//    .then(function (response) {
//     //  console.log(response[0]);

//      for (i = 0; i < response.length; i ++) {

//          console.log(response[i]);
//      }
//    });


// multiple airports
//  scrapeNotams(['KATL','KMEM'])
//    .then(function (notams) {
//      console.log(notams);
//    });

// [ '1904091638-2104091638EST',
//   '1904091638',
//   '2104091638',
//   'EST',
//   index: 126,
//   input: '!FDC 9/9373 (KTUS A0280/19)  TUS IAP TUCSON INTL, Tucson, AZ. ILS OR LOC RWY 11L, AMDT 14A... S-ILS DA 2804/HAT 205 ALL CATS. 1904091638-2104091638EST',
//   groups: undefined ]

// Options:
// search:     location name or zipcode
// degreeType: F or C

var weather = require('weather-js');
 
// Options:
// search:     location name or zipcode
// degreeType: F or C
var city = process.argv[2];
var state = process.argv[3];

weather.find({search: city, state, degreeType: 'F'}, function(err, result) {
    if(err) console.log(err);
   
    var place = result[0].location;
    var current = result[0].current;

    console.log(`The weather conditions for ${place.name}
    on ${current.day}, ${current.date}, as of ${current.observationtime} (local):
    Temperature: ${current.temperature}
    Skies: ${current.skytext}
    Humidity: ${current.humidity}
    Wind Speed: ${current.winddisplay}
    `);

    var forecast = result[0].forecast;
    console.log(`The forecast for ${forecast[2].day} is for ${forecast[2].skytextday} skies
    a high of ${forecast[2].high}`)
  });
