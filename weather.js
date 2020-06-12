var input = document.getElementById("text1");
var main = document.getElementById("showPlace");
var temp = document.getElementById("showTemperature");
var clouds = document.getElementById("showWeather");
var button= document.getElementById("btn");

button.addEventListener('click', function(showPlace){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'];
  var nameValue = data['showPlace'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = descValue;
  temp.innerHTML = tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
