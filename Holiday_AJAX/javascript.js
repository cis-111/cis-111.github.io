// Javascript for Holidays AJAX Website 
// by Renee Hollomon 

// holidayapi.com 001f2221-e1a9-4d23-bf93-fdc9ca781edd
"use strict;"
// window.alert("Hello World");

/* Multiple ways to 'attach' an action to an event: 
a) in the HTML use, "onclick"
b) setup connection in JS file
	b.i) document.getElementByID() onclick=
	b.ii) document.getElementByID("select").addEventListener(); 
c) when window finishes loading
window.addEventListener(DOMContentLoaded, _____)
*/

//document.getElementById("userDate").addEventListener("click", getUserDate());
document.getElementById("userDate").addEventListener("click", function() {
	//console.log("userDate clicked.");
  // First clear any existing holiday data.
	document.getElementById("fact").innerHTML = "";
	document.getElementById("fact").style.display = "none";
	// get the user's date 
	let date = document.getElementById("date").value;
	//console.log("user's date is: " + date);
	// TODO CHECK THAT A DATE WAS ENTERED
	// TODO STUPID API ONLY OFFERS FREE ACCOUNTS LAST YEAR'S HOLIDAYS??!!&^&^%
	// split date into array, [year, month, day]
	let dateParts = date.split("-");
	// console.log("Date parts are: " + dateParts);
	// console.log("year = " + dateParts[0]);
	// console.log("month = " + dateParts[1]);
	// console.log("day = " + dateParts[2]);
	// create URL using dateparts
	let url = "https://holidayapi.com/v1/holidays?pretty&key=001f2221-e1a9-4d23-bf93-fdc9ca781edd&country=US&year=" + dateParts[0] + "&month=" + dateParts[1] + "&day=" + dateParts[2] + "&public=false&upcoming=true";
	// console.log(url);
	// URL above is valid. TODO LIMIT INPUT TO PREV YEAR / LAME FREEWARE 
	// AJAX Sequence: 
	getData(url);

}) // end function, end input event listener.
																										 
// getData() function from REFERENCE_ajax_json.pdf by Prof Pamela Price		
function getData(url) {
	//assign url
	//create AJAX object
	let xhr = new XMLHttpRequest();
	//create handler for response 
	xhr.addEventListener("load", responseReceivedHandler);
	//if data returned is JSON need this!
	xhr.responseType = "json";
	//open connection
	xhr.open('GET', url);
	//send request
	xhr.send();
}

// This function receivess and handles the response.
function responseReceivedHandler(){ 
	//first check for successful result
     if (this.status == 200){
       //look at the data first
			 //console.log(this.response); 
			 //console.log(this.response.holidays[0].name);
			 //console.log(this.response.holidays[0].date);
			 //console.log(this.response.holidays[0].country);

			 //display data on the webpage
			 let dataString = "<p>Holiday Name: " + this.response.holidays[0].name 
			 		+ "</p><p>On Date: " + this.response.holidays[0].date 
			 		+ "</p><p>In Country: " + this.response.holidays[0].country;
			 document.getElementById("fact").innerHTML = dataString;
			 document.getElementById("fact").style.display = "block";
			 
} else{
				// TODO: INVALID DOMAIN DOES NOT TRIGGER THIS CODE.
				// TODO: INVALID URL DOES NOT TRIGGER THIS CODE ()
         window.alert("bad response code: " + this.status);
    }
}
