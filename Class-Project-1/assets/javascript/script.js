


const weatherKey = '4d57bc32eee398fdfe779489a997ae6c'

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
async function fetchCurrentWeather(city) {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${weatherKeyKey}`
    );
    // Throw error if response is not successful
    if (!response.ok) throw new Error('City not found');
    return response.json();}

	function displayCurrentWeather(data) {
		// Create HTML template with current weather data
		currentWeather.innerHTML = `
			<div class="weather-card">
				<h2>
					${data.name} (${new Date().toLocaleDateString()})
					<img class="weather-icon" src="http://openweathermap.org/img/w/${data.weather[0].icon}.png" 
						 alt="${data.weather[0].description}">
				</h2>
				<ul class="weather-info">
					<li>Temperature: ${Math.round(data.main.temp)}°F</li>
					<li>Humidity: ${data.main.humidity}%</li>
					<li>Wind Speed: ${data.wind.speed} MPH</li>
				</ul>
			</div>
		`;
	}
	console.log(fetchCurrentWeather)