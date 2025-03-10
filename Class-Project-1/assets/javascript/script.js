const footballKey = "b6e34e3420441ef09c2b786b23b70a9f";
const teamNameInput = document.getElementById("team-name");
const searchButton = document.getElementById("searchButton");

//Spotify API//

//API-FOOTBALL//

//Team Selector//

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  let teamName = teamNameInput.value;

  fetch(`https://v3.football.api-sports.io/teams?name=${teamName}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "v3.football.api-sports.io",
      "x-rapidapi-key": footballKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      displayTeamData(data);
    })
    .catch((err) => {
      console.log(err);
    });
});

function displayTeamData(data) {
  const clubName = data.response[0].team.name;
  const clubCity = data.response[0].venue.city;
  const teamCountry = data.response[0].team.country;
  const teamLogo = data.response[0].team.logo;

  const teamNameElement = document.querySelector("#team-card .card-title");
  const teamCityElement = document.querySelector("#team-card .card-text1");
  const teamCountryElement = document.querySelector("#team-card .card-text2");
  const teamLogoElement = document.querySelector("#team-logo");

  teamNameElement.textContent = clubName;
  teamCityElement.textContent = clubCity;
  teamCountryElement.textContent = teamCountry;
  teamLogoElement.src = teamLogo;
  teamLogoElement.style.width = "150px";
  teamLogoElement.style.height = "150px";
  teamLogoElement.style.margin = "auto";
}

function insertTeamData(data) {
  const clubID = data.response[0].team.id;
  const dataTeam = document.querySelector('#wg-api-football-standings');
  dataTeam.setAttribute('data-team',clubID);
}

// function displayFixtureData (data) {

// }
