// Javascript for navigation bar.
"use strict;"

let footsieText = '<nav style="text-align: center;">' + 
					'<a href="/index.html" class="active">HOME</a><br>' + 
					'<a href="/Simple_Store/index.html">STORE</a> &nbsp; ' + 
					'<a href="/API_Quote/index.html">QUOTES</a>  &nbsp;' + 
					'<a href="/Temp_Convert/index.html">&deg;F / &deg;C</a><br>' + 
					'<a href="/Weather_AJAX/index.html">WEATHER</a> &nbsp; ' + 
					'<a href="/Holiday_AJAX/index.html">HOLIDAYS</a> &nbsp; ' + 
					'<a href="/Number_Fact_AJAX/index.html">NUMBER FUN</a>' + 
					'</nav>';


document.getElementById("footsie").innerHTML = footsieText;

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


