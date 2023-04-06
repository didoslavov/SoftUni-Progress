const input = document.getElementById('location');
const button = document.getElementById('submit');

const forecastDiv = document.getElementById('forecast');
const currentDiv = document.getElementById('current');
const upcomingDiv = document.getElementById('upcoming');

const baseUrl = 'http://localhost:3030/jsonstore/forecaster/';

button.addEventListener('click', attachEvents);

const conditions = {
  Sunny: '☀',
  'Partly sunny': '⛅',
  Overcast: '☁',
  Rain: '☂',
  Degrees: '°',
};

async function attachEvents() {
  const location = input.value;

  //Creating html elements
  const oneDayDiv = document.createElement('div');
  const symbolSpan = document.createElement('span');
  const conditionSpan = document.createElement('span');
  const locationSpan = document.createElement('span');
  const degreesSpan = document.createElement('span');
  const weatherSpan = document.createElement('span');

  //Adding attributes to html elements
  oneDayDiv.classList.add('forecasts');
  symbolSpan.classList.add('condition');
  symbolSpan.classList.add('symbol');
  conditionSpan.classList.add('condition');
  locationSpan.classList.add('forecast-data');
  degreesSpan.classList.add('forecast-data');
  weatherSpan.classList.add('forecast-data');

  try {
    const response = await fetch(baseUrl + 'locations/');
    const data = await response.json();

    const targetLocation = data.find(x => x.name === location);

    const locationCode = targetLocation.code;

    const currentConditions = await fetch(baseUrl + 'today/' + locationCode);
    const currentConditionsData = await currentConditions.json();

    const threeDayForecast = await fetch(baseUrl + 'upcoming/' + locationCode);
    const threeDayForecastData = await threeDayForecast.json();

    forecastDiv.style.display = 'block';

    //Populate html elements and append them to DOM
    symbolSpan.textContent =
      conditions[currentConditionsData.forecast.condition];
    oneDayDiv.appendChild(symbolSpan);

    locationSpan.innerText = currentConditionsData.name;
    degreesSpan.innerText = `${currentConditionsData.forecast.low}${conditions.Degrees}/${currentConditionsData.forecast.high}${conditions.Degrees}`;
    weatherSpan.innerText = currentConditionsData.forecast.condition;

    conditionSpan.appendChild(locationSpan);
    conditionSpan.appendChild(degreesSpan);
    conditionSpan.appendChild(weatherSpan);
    oneDayDiv.appendChild(conditionSpan);
    currentDiv.appendChild(oneDayDiv);

    const threeDayDiv = document.createElement('div');
    threeDayDiv.classList.add('forecast-info');

    threeDayForecastData.forecast.forEach(d => {
      const upcomingSpan = document.createElement('span');
      const upcomingSymbolSpan = document.createElement('span');
      const upcomingDegreesSpan = document.createElement('span');
      const upcomingWeatherSpan = document.createElement('span');

      upcomingSpan.classList.add('upcoming');
      upcomingSymbolSpan.classList.add('symbol');
      upcomingDegreesSpan.classList.add('forecast-data');
      upcomingWeatherSpan.classList.add('forecast-data');

      upcomingSymbolSpan.innerText = conditions[d.condition];
      upcomingDegreesSpan.innerText = `${d.low}${conditions.Degrees}/${d.high}${conditions.Degrees}`;
      upcomingWeatherSpan.innerText = d.condition;

      upcomingSpan.appendChild(upcomingSymbolSpan);
      upcomingSpan.appendChild(upcomingDegreesSpan);
      upcomingSpan.appendChild(upcomingWeatherSpan);
      threeDayDiv.appendChild(upcomingSpan);
    });
    upcomingDiv.appendChild(threeDayDiv);
  } catch (e) {
    forecastDiv.style.display = 'block';
    forecastDiv.innerText = `${e}`;
  }
}
