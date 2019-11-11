/*******************************************************************************************************/
/************************************* VARIABLES *************************************************/
/*************************************** HERE ***************************************************/
/*******************************************************************************************************/

// require axios
const axios = require("axios");

// require weather js
var weather = require('weather-js');

// include leaflet library
// var leaflet = require("leaflet");
// may or may not use
var scrapeNotams = require('@ryanburnette/scrape-notams');

// capture user input city
var city = "Binghamton"; // process.argv[2];

// capture user input state
var state = "NY"; // process.argv[3];

/*******************************************************************************************************/
/********************************* FUNCTIONS HERE ***************************************************/
/*******************************************************************************************************/
function getWeather () {

weather.find({ search: city, state, degreeType: 'F' }, function (err, result) {
  if (err) console.log(err);

  //  console.log(result[0]);

  var place = result[0].location;
  var current = result[0].current;

  // &#176; or &deg; symbol for degrees
  $("#weather").html(`The weather conditions for ${place.name}
    on ${current.day}, ${current.date}, as of ${current.observationtime} (local):
    Temperature: ${current.temperature}F 
    Skies: ${current.skytext}
    Humidity: ${current.humidity}%
    Wind Speed: ${current.winddisplay}
    Image: ${current.imageUrl}
    `);

  var forecast = result[0].forecast;
  console.log(`The forecast for ${forecast[2].day} is for ${forecast[2].skytextday} skies
    a high of ${forecast[2].high}`)
});
}
getWeather();

/*******************************************************************************************************/
/***************************************** PROCESSES HERE ***************************************************/
/*******************************************************************************************************/
// Windy API
/*const options = {
  // Required: API key
  key: '7boLrbOJNaHdUb5uE3DNSWq1xQUlKSTr', // REPLACE WITH YOUR KEY !!!

  // Put additional console output
  verbose: true,

  // Optional: Initial state of the map
  lat: 32.22,
  lon: -110.97,
  zoom: 5,
  timestamp: Date.now() + 3 * 24 * 60 * 60 * 1000,

  hourFormat: '12h',

};

// Initialize Windy API
windyInit(options, windyAPI => {
  const { picker, utils, broadcast } = windyAPI;

  picker.on('pickerOpened', latLon => {
    // picker has been opened at latLon coords
    console.log(latLon);

    const { lat, lon, values, overlay } = picker.getParams();
    // -> 50.4, 14.3, 'wind', [ U,V, ]
    console.log(lat, lon, values, overlay);

    const windObject = utils.wind2obj(values);
    console.log(windObject);
  });

  picker.on('pickerMoved', latLon => {
    // picker was dragged by user to latLon coords
    console.log(latLon);
  });

  picker.on('pickerClosed', () => {
    // picker was closed
  });

  // Wait since wather is rendered
  broadcast.once('redrawFinished', () => {
    picker.open({ lat: 32.22, lon: -110.97 });
    // Opening of a picker (async)
  });
});

// var map = L.map('map'),
//     realtime = L.realtime({
//         url: 'https://wanderdrone.appspot.com/',
//         crossOrigin: true,
//         type: 'json'
//     }, {
//         interval: 3 * 1000
//     }).addTo(map);
 
// realtime.on('update', function() {
//     map.fitBounds(realtime.getBounds(), {maxZoom: 3});
// });

// import the module
/*
const recipeScraper = require("recipe-scraper");

const axios = require("axios");

function openWeather () {
  axios({
    "method": "GET",
    "url": "https://community-open-weather-map.p.rapidapi.com/forecast",
    "headers": {
      "content-type": "application/octet-stream",
      "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key": "8eecbcc5f3msh5bc24b407332722p168923jsnad8e655c2cd4"
    }, "params": {
      "q": "San Francisco, Us"
    }
  })
    .then((response) => {
      var conditions = response.data.list[0];

      console.log(conditions);
    })
    .catch((error) => {
      console.log(error)
    })
}

    axios.get("http://samples.openweathermap.org/data/2.5/weather?q=Tucson,az&appid=b6907d289e10d714a6e88b30761fae22").then(
        function(response) {
          console.log(response.data)
          // Then we print out the imdbRating
          
        }
      );
      */