/* Javascript: Number Facts AJAX Practice, by Renee */

"use strict;"
//window.alert("connected");

//declare variables 
let fact = document.getElementById("fact");
let factText = document.getElementById("factText");

let integer = document.getElementById("integer");


integer.addEventListener('input', getData);

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
	// console.log("function: getData");
	// cleaar out display section
	fact.style.display = "none";
	factText.innerHTML = "";
	// get the integer
	const myInteger = parseInt(integer.value);
	// WRITE FUNCTION TO CHECK FOR NaN
	// FIRST TEST CASE: User enters NaN
	// SECOND TEST CASE: User backspaces out entire number
	// (second test case: error is invisible to user)
	// console.log("myInteger is: " + myInteger);
	if (myInteger != "") {
		//make a request via AJAX with myInteger
		let url = "http://numbersapi.com/" + myInteger;
		// console.log("url is: " + url);
		// create AJAX object
		let xhr = new XMLHttpRequest();
		// set up a response handler
		xhr.addEventListener("load", responseReceivedHandler);
		// open the connection
		xhr.open('GET', url);
		// send the data
		xhr.send();
	}//end if
}//end getData

		// write a responseReceivedHandler?
function responseReceivedHandler() {
	// console.log("function responseReceivedHandler");
	// check status = 200
	if (this.status == 200) {
		// success! 
		console.log(this.responseText);
		factText.innerHTML = this.responseText;
		fact.style.display = "block";
	} else {
		console.log("Status: " + this.status)
	}
}