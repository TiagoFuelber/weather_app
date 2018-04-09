import { API_URL } from './Constants';
import searchLocation from './searchLocation';
import LocalWeather from './LocalWeather';
import showContent from './showContent';
import getBackgroundImage from './getBackgroundImage';

const form = document.querySelector('#form');
const body = document.querySelector('body');
let degreesC = document.querySelector('#degrees-c');
let degreesF = document.querySelector('#degrees-f');
let container = document.querySelector('.box-display');
let localWeather;

// gets the user coordinates and stores in apiCall
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    searchLocation(`${position.coords.latitude},${position.coords.longitude}`)
      .then(data => data.json())
      .then(data => {
        localWeather = new LocalWeather(data);
        container.innerHTML = showContent(localWeather);
        body.style.backgroundImage = `url('images/${getBackgroundImage(localWeather.code)}.jpg')`;
        return localWeather;
      })
      .catch(error => console.log(error));
  });
} else {
  console.log("Geolocation not working");
}

// Button search
form.addEventListener('submit', (event) => {
  event.preventDefault();

  searchLocation(document.querySelector('#inputCity').value)
    .then(data => data.json())
    .then(data => {
      localWeather = new LocalWeather(data);
      container.innerHTML = showContent(localWeather);
      body.style.backgroundImage = `url('images/${getBackgroundImage(localWeather.code)}.jpg')`;
      return localWeather;
    })
    .catch(error => console.log(error));
});

document.querySelector('#switchBtn').addEventListener('click', () => {
  degreesC.classList.toggle('hidden');
  degreesF.classList.toggle('hidden');
});
