/* Javascript: Weather AJAX Practice, by Renee */

"use strict;"
//window.alert("connected");

// In the video walk-through, Pamela opens a dev console (12:11) that I cannot figure out how to access on my computer.  WOULD LIKE  TO KNOW HOW TO ACCESS THAT MORE-INFORMATIVE CONSOLE. 

// SAMPLE URL http://api.openweathermap.org/data/2.5/weather?zip=77705&units=imperial&appid=1307007a7da1aeb5b59930a312a42cd3

//declare variables 
let zipcode = 0;
document.getElementById("weatherCurrent").addEventListener("click", getData);

// Allow only digit char, not exponent (e) or special char. 
// REF: https://stackoverflow.com/questions/39291997/how-to-block-e-in-input-type-number
document.querySelector("input").addEventListener("keypress", function (evt) {
    if (evt.which != 8 && evt.which != 0 && evt.which < 48 || evt.which > 57)
    {
        evt.preventDefault();
    }
});
// 8 for backspace 
// 0 for null values
// 48-57 for 0-9 numbers


function getData () {
	// console.log("getData clicked.");
	let zipcode = document.getElementById("zipcode").value;
	// console.log("Zipcode: " + zipcode);
	// get weather for zipcode
	getWeather(zipcode);
}//end getData

function getWeather(zippy) {
	// console.log("zippy is: " + zippy);
	let endpoint = "http://api.openweathermap.org/data/2.5/weather";
	let apiKey = "1307007a7da1aeb5b59930a312a42cd3";
	let queryString = "zip=" + zippy + "&units=imperial&appid=" + apiKey;
	let url = endpoint + "?" + queryString;
	// console.log(url);
	// works thus far. 
	// create object
	let xhr = new XMLHttpRequest();
	// setup action response: add event listener
	xhr.addEventListener("load", responseReceivedHandler);
	// required to receive JSON string.
	xhr.responseType = "json";
	xhr.open("GET", url);
	xhr.send();
}

function responseReceivedHandler() {
	// VIEW this.response -- the whole shebang! 
	// console.log(this.response);
	// Note '96967' results in a console displayed error.
	// console.log("responseReceivedHandler invoked.");	
	let weatherInfo = document.getElementById("weatherInfo");
	if (this.status === 200) {
		// happy so output the weather
		// CITY NAME: 
		// console.log(this.response.name); 
		cityName.innerHTML = "Weather in " + this.response.name + "<br>\"" + this.response.weather[0].description + "\""; 
		weatherInfo.innerHTML =
			"Current temp: " + Math.round(this.response.main.temp) + "&deg;F<br>" + 
			"Feels like: " + Math.round(this.response.main.feels_like) + "&deg;F<br>" + 
			"Humidity: " + this.response.main.humidity + "%<br>" + 
			"Pressure: " + this.response.main.pressure + "mB<br><br>" + 
			"Today's high: " + Math.round(this.response.main.temp_max) + "&deg;F<br>" + 
			"Tonight's low: " + Math.round(this.response.main.temp_min) + "&deg;F<br>" + 
			"<span id='copyright'>Weather data &copy 2012 - 2021 OpenWeather</span>";
	} else {
		weatherInfo.innerHTML = "Sorry, weather data unavailable.";
	}
}






