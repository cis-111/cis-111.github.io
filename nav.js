// Javascript for navigation bar.
"use strict;"

/* 

<footer>
		<pre>
		<!-- include a footer file -->
		Author: Renee Hollomon, CIS 113 Student at Skyline College 
		Copyright: &copy Renee Hollomon 2021
    <address>Contact: (twitter link)</address>
		Sitemap: (tk)
		Back To Top
		Related Documents: <!-- Include navbar --*
		<!-- include a footer file -->
		</pre>
	</footer>

*/


let footsieText = '<nav style="text-align: center;">' + 
					'* <a href="/index.html">Home</a> *<br>' + 
					'* <a href="/about.html">About Renee Wendy</a> *<br>' + 
					'* <a href="/Simple_Store/index.html">YUMMY Cafe</a>  *&nbsp; ' + 
					'* <a href="/API_Quote/index.html">QUOTES Generator</a> *&nbsp;' + 
					'* <a href="/Temp_Convert/index.html">Convert F&deg; to C&deg;</a> *<br>' + 
					'* <a href="/Weather_AJAX/index.html">Weather, Currently</a>  *&nbsp; ' + 
					'* <a href="/Holiday_AJAX/index.html">HOLIDAYS LAST YEAR</a>  *&nbsp; ' + 
					'* <a href="/Number_Fact_AJAX/index.html">Gimme A Number FUN</a> *' + 
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



