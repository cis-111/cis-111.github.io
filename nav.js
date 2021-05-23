// Javascript for navigation bar.
"use strict;"

/* _______ Navigation Bar _________________________________ */

			function myFunction() {
  			var x = document.getElementById("myTopnav");
  			if (x.className === "topnav") {
    			x.className += " responsive";
					console.log("changed to responsive");
  			} else {
    			x.className = "topnav";
					console.log("changed to remove responsive");
  			}
		  }
			


/* ___ END Navigation Bar _________________________________ */



