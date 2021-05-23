/* ZYbooks 11.4 homework 
cInput - Text input field for C temperature
fInput - Text input field for F temperature
convertButton	- Button clicked to convert C/F
errorMessag - div forerror message when convert fails
weatherImage - Image corresponding to the temperature

// THE HARDEST PART WAS LOGIC THAT ALLOWED A ZERO TEMPERATURE ENTRY!

*/
window.addEventListener("DOMContentLoaded", domLoaded);
//window.alert("connected");
//let temp = 7;
//window.alert(convertFtoC(temp));

function domLoaded() {
//	console.log("DOM loaded");
	/* Register event handler to limit input to one Id. */	
	document.getElementById("cInput").addEventListener("input", function(){
		// if cInput then clear fInput and errorMessage
		document.getElementById("fInput").value = "";
		document.getElementById("errorMessage").innerHTML = "";		
	});
	document.getElementById("fInput").addEventListener("input", function(){
		// if fInput then clear cInput aand errorMessage
		document.getElementById("cInput").value = "";
		document.getElementById("errorMessage").innerHTML = "";
	});

	let cInput;
	let fInput;
	let cTemper;
	let fTemper;

	// Register a click event handler for the Convert button
	document.getElementById("convertButton").addEventListener("click", function(){
//		console.log("Convert Button clicked.");
		cInput = document.getElementById("cInput").value;
		fInput = document.getElementById("fInput").value;
		cTemper = parseFloat(cInput);
		fTemper = parseFloat(fInput);
		// because parseFloat() both inputs are EITHER a number OR NaN.
		if (isNaN(cTemper) && isNaN(fTemper)) {
//			console.log("Neither cTemper nor fTemper are numbers.");
			if (cInput.length > 1 ) {
				// then cTemper is our error message...
				document.getElementById("errorMessage").innerHTML = cInput + " is not a number";
			} else {
				document.getElementById("errorMessage").innerHTML = fInput + " is not a number";
			}
			return;
		} else if (isNaN(fTemper)) {
//			console.log("fTemper is NaN therefore convert cTemper");
			fTemper = convertCtoF(cTemper);
			//console.log("converting C to F... " + fTemper);
			document.getElementById("fInput").value = fTemper;			
			document.getElementById("cInput").value = "";			
		// only remaining option is to convert fTemper
		} else {
//			console.log("fInput is a number!!!!!");
			cTemper = convertFtoC(fTemper);
//			console.log("converting F to C... " + cTemper);
			document.getElementById("cInput").value = cTemper;			
			document.getElementById("fInput").value = "";			
		}
	// At this point, we know we have valid input, and we have 
	// calculated both cTemper and fTemper. Time to modify image:
		if (fTemper <= 32) {
		document.getElementById("weatherImage").src = "cold.png";
		} else if (fTemper <= 50) {
			document.getElementById("weatherImage").src = "cool.png";
		} else {
			document.getElementById("weatherImage").src = "warm.png";
		}
	});
}

function convertCtoF(degreesCelsius) {
//	console.log("CtoF entered");
	// °F = °C * 9/5 + 32
	return((degreesCelsius * 9 / 5) + 32);
}

function convertFtoC(degreesFahrenheit) {
//	console.log("FtoC entered");
   // °C = (°F - 32) * 5/9
	return((degreesFahrenheit - 32) * 5 / 9);
}
