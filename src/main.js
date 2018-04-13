import searchLocation from './searchLocation';
import LocalWeather from './LocalWeather';
import showContent from './showContent';
import getBackgroundImage from './getBackgroundImage';
import toggleCelsiusFarenheit from './toggleCelsiusFarenheit';

const form = document.querySelector('#form');
const body = document.querySelector('body');
const container = document.querySelector('.box-display');
let localWeather;

// gets the user coordinates and stores in apiCall
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition((position) => {
    searchLocation(`${position.coords.latitude},${position.coords.longitude}`)
      .then(data => data.json())
      .then((data) => {
        localWeather = new LocalWeather(data);
        container.innerHTML = showContent(localWeather);
        body.style.backgroundImage = `url('images/${getBackgroundImage(localWeather.code)}.jpg')`;
        document.querySelector('#switchBtn').addEventListener('click', toggleCelsiusFarenheit);
        return localWeather;
      })
      .catch(error => console.log(error));
  });
} else {
  console.log('Geolocation not working');
}

// Button search
form.addEventListener('submit', (event) => {
  event.preventDefault();

  searchLocation(document.querySelector('#inputCity').value)
    .then(data => data.json())
    .then((data) => {
      localWeather = new LocalWeather(data);
      container.innerHTML = showContent(localWeather);
      body.style.backgroundImage = `url('images/${getBackgroundImage(localWeather.code)}.jpg')`;
      document.querySelector('#switchBtn').addEventListener('click', toggleCelsiusFarenheit);
      return localWeather;
    })
    .catch(error => console.log(error));
});
