// import the module
const recipeScraper = require("recipe-scraper");

const axios = require("axios");
// http://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22
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