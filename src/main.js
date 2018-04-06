console.log('entrou aqui');

var apiLink = "https://api.apixu.com/v1/current.json?key=d0f7e0df0b704466a40162720160911&q=",
    form = $('#form'),
    obj;


// declares the variables with the background images
var sunpic = "url('http://static.tumblr.com/dpm5r31/NS3og39pj/suny_day.jpeg')";
var thunderpic = "url('http://static.tumblr.com/dpm5r31/6U5ogftat/trovoada.jpg')";
var mistypic = "url('http://static.tumblr.com/dpm5r31/hpQogftag/serracao.jpg')";
var cloudypic = "url('http://static.tumblr.com/dpm5r31/zJwogfta3/nublado.jpg')";
var snowpic = "url('http://static.tumblr.com/dpm5r31/wSyogft9q/neve.jpg')";
var rainpic = "url('http://static.tumblr.com/dpm5r31/abGogft9c/chuva.jpg')";
var clearpic = "url('http://static.tumblr.com/dpm5r31/W0Rogft8y/ceu-limpo.jpg')";

function background() {
    switch (obj.current.condition.code) {
      case 1000:
      default:
        $('body').css('background-image', clearpic);
        break;
      case 1003:
        $('body').css('background-image', sunpic);
        break;
      case 1006: case 1009:
        $('body').css('background-image', cloudypic);
        break;
      case 1030: case 1135: case 1147:
        $('body').css('background-image', mistypic);
        break;
      case 1063: case 1069: case 1072: case 1150: case 1153: case 1168: case 1171: case 1180: case 1183: case 1186: case 1189: case 1192: case 1195: case 1198: case 1201: case 1240: case 1243: case 1246: case 1273: case 1276:
        $('body').css('background-image', rainpic);
        break;
      case 1066: case 1114: case 1117: case 1204: case 1207: case 1210: case 1213: case 1216: case 1219: case 1222: case 1225: case 1237: case 1249: case 1252: case 1255: case 1258: case 1261: case 1264: case 1279: case 1282:
        $('body').css('background-image', snowpic);
        break;
      case 1087:
        $('body').css('background-image', thunderpic);
        break;
       }
  }

function apiUrl(position) {
    var apiCall = apiLink + position.coords.latitude + "," + position.coords.longitude;
  // requests the JSON from the API
  $.getJSON(apiCall, function(json) {
       obj = JSON.stringify(json);
       obj = JSON.parse(obj);
       showContent();
       });
}

// Shows weather information on page
function showContent() {
  $('#city').html(obj.location.name);
  $('#temp').html(obj.current.temp_c + "°C");
  $('#description').html(obj.current.condition.text);
  $('#weather-icon').attr("src", obj.current.condition.icon);
  background();
}
// gets the user coordinates and stores in apiCall
    if (navigator.geolocation) {
       navigator.geolocation.getCurrentPosition(apiUrl)
    } else {
        window.alert("Geolocation not working");
    }
// Button search
form.on('submit', function (e) {
  e.preventDefault();
  var x = apiLink + $('#inputCity').val();
  $.getJSON(x, function(json) {
       obj = JSON.stringify(json);
       obj = JSON.parse(obj);
       //$('#city').html(obj);
       showContent();
       });
});
$(document).ready(function() {
  // switch button
  $('#switchBtn').click(function() {
    if ($('#temp').attr('data-degree') === "celsius") {
      $('#temp').html(obj.current.temp_f + "°F");
      $('#temp').attr('data-degree', "fahrenheit");
    } else if ($('#temp').attr('data-degree') === "fahrenheit") {
      $('#temp').html(obj.current.temp_c + "°C");
      $('#temp').attr('data-degree', "celsius");
    }
  });
});
