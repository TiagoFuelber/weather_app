export default function showContent(localWeather) {
  return `
    <div id="celsius">
      <p id="city">${localWeather.city}</p>
      <p id="degrees-c">${localWeather.degreesInC} ºC</p>
      <p class="hidden" id="degrees-f">${localWeather.degreesInF} ºF</p>
    </div>
    <button id="switchBtn" type="button" class="btn btn-grey">
      ºC / ºF
    </button>

    <p id="description">${localWeather.description}</p>
    <!-- weather Icon -->
    <img id="weather-icon" src="${localWeather.icon}"/>
  `;
}
