


var weatherKey = '4d57bc32eee398fdfe779489a997ae6c'

//Spotify API//

//API-FOOTBALL//

//Team Info//
fetch("https://v3.football.api-sports.io/teams?id=33", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-rapidapi-key": "b6e34e3420441ef09c2b786b23b70a9f"
	}
   })
 .then(response => {
	console.log(response);
    return response.json();
})
.then(data=> {
    console.log(data);
})
.catch(err => {
	console.log(err);
});

//Weather API, City & Country Code//
//`https://api.openweathermap.org/data/2.5/weather?q={city name},{country code}&appid=weatherKey`
