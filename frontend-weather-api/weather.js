var txt1 = document.getElementById("text1");
var showPlace = document.getElementById("showPlace");
var showDayAndTime = document.getElementById("showDayAndTime");
var showTemperature = document.getElementById("showTemperature");
var showWeather = document.getElementById("showWeather");
var btn = document.getElementById("btn");

button.addEventListener('click', function(showPlace){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+txt1.value+'&appid=64cc008a818db50b99b5139189b2044d')
.then(response => response.json())
.then(data => {
  var showPlaceValue = data['name'];
  var showDayAndTimeValue = data['timezone'];
  var showTemperatureValue = data['main']['temp'];
  var showWeatherValue = data['weather'][0]['description'];

  showPlace.innerHTML = showPlaceValue;
  showDayAndTime.innerHTML = showDayAndTimeValue;
  showWeather.innerHTML = showWeatherValue;
  showTemperature.innerHTML = showTemperatureValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
